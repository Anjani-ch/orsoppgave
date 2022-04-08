const emailValidator = require('email-validator');

const { renderInbox } = require('./viewController.js');

const { Message } = require('../models/Message.js');
const { User } = require('../models/User.js');
const { Admin } = require('../models/Admin.js');
const { SuperAdmin } = require('../models/SuperAdmin.js');

// ADD FIX: circular dependency (https://stackoverflow.com/questions/64713565/accessing-non-existent-property-padlevels-of-module-exports-inside-circular-de)

const createMessage = async (req, res) => {
    const { receiver, subject, body } = req.body;

    const errors = [];

    let result;

    if(!receiver || !subject || !body) errors.push('Please fill in all fields');

    try {
        if(emailValidator.validate(receiver)) {
            const userPromise = User.findOne({ email: receiver });
            const adminPromise = Admin.findOne({ email: receiver });
            const superAdminPromise = SuperAdmin.findOne({ email: receiver });

            const results = await Promise.all([userPromise, adminPromise, superAdminPromise]);

            result = results.filter(result => result)[0];

            if(!result) errors.push(`No user with email: ${receiver}`);
        } else {
            errors.push('Invalid email');
        }
    } catch (err) {
        console.log(err);
    }

    if(!errors.length) {
        try {
            const msg = new Message({ ...req.body, senderEmail: req.user.email, receiverEmail: receiver });
    
            await msg.save();
    
            res.redirect('/inbox');
        } catch(err) {
            console.log(err);
            res.status(500).json({ msg: 'Error creating message' });
        }
    } else {
        renderInbox(req, res, { errors, ...req.body });
    }
};

const getSendtMessages = async (req, res, email) => {
    try {
        const messages = await Message.find({ senderEmail: email });

        return messages;
    } catch (err) {
        console.log(err);
    }
};

const getReceivedMessages = async (req, res, email) => {
    try {
        const messages = await Message.find({ receiverEmail: email });

        return messages;
    } catch (err) {
        console.log(err);
    }
};

module.exports = { createMessage, getSendtMessages, getReceivedMessages };