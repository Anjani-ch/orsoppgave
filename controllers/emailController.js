const { Email } = require('../models/Email.js');

/* 
const emailObj = {
    subject: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true,
    },
    dueTime: {
        type: Date,
        required: true
    },
};

*/

const createEmail = async (req, res, data) => {
    const email = new Email(data);

    try {
        await email.save();
        
        return { ...data, id: email.id };
    } catch (err) {
        console.log(err);
    }
};

const deleteEmail = async (req, res, id) => {
    try {
        await Email.deleteOne({ _id: id });
    } catch (err) {
        console.log(err);
    }
};

const getEmails = async _ => {
    try {
        const results = await Email.find();

        return results;
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Error getting emails' });
    }
};

module.exports = { createEmail, deleteEmail, getEmails };