const { renderInbox } = require('./viewController.js');

const emailValidator = require('email-validator');

const { Message } = require('../models/Message.js');
const { User } = require('../models/User.js');
const { Admin } = require('../models/Admin.js');
const { SuperAdmin } = require('../models/SuperAdmin.js');

// https://stackoverflow.com/questions/64713565/accessing-non-existent-property-padlevels-of-module-exports-inside-circular-de

const createMessage = async (req, res) => {
    const { receiver, subject, body } = req.body;

    const errors = [];

    let result;

    if(!receiver || !subject || body) errors.push('Please fill in all fields');

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
        console.log(err)
    }

    if(!errors.length) {
        console.log('valid')
        try {
            const msg = new Message({ ...req.body, senderEmail: req.user.email, receiverEmail: receiver });
    
            await msg.save();
    
            res.redirect('/inbox');
        } catch(err) {
            console.log(err);
            res.status(500).json({ msg: 'Error creating message' });
        }
    } else {
        // console.log(renderInbox)
        console.log(errors)
        renderInbox(req, res, { errors, ...req.body });
    }
};

const getSendtMessages = async (req, res, email) => {
    try {
        const messages = await Message.find({ senderEmail: email });

        return messages;
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Error retreving messages' });
    }
};

const getReceivedMessages = async (req, res, email) => {
    try {
        const messages = await Message.find({ receiverEmail: email });

        return messages;
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Error retreving messages' });
    }
};

module.exports = { createMessage, getSendtMessages, getReceivedMessages };