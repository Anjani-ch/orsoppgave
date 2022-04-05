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
        console.log(email)
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

module.exports = { createEmail, deleteEmail };