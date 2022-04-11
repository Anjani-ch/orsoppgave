const { isDueTime } = require('../modules/date.js');

const { Email } = require('../models/Email.js');

const { sendEmailToClient } = require('./socketController.js');
const { sendEmail } = require('./mailchimpController.js');

let emailSchedules = [];

const createEmail = async (req, res, data) => {
    const email = new Email(data);

    try {
        await email.save();
        
        return { ...data, id: email.id };
    } catch (err) {
        console.log(err);
    }
};

const deleteEmail = async id => {
    try {
        await Email.deleteOne({ _id: id });

        emailSchedules = emailSchedules.filter(email => email.id !== id);
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
    }
};

const checkEmailDueTime = async _ => {
    emailSchedules.forEach(email => {
        const { dueTime } = email;

        const now = new Date(Date.now());
        const dueTimeDate = new Date(dueTime).getTime();
        console.log(dueTime)
        if(isDueTime(dueTime)) {
            sendEmail(email);
            sendEmailToClient(email);
            deleteEmail(email.id);
        } else if(now > dueTimeDate) {
            deleteEmail(email.id);
        }
    });
};

const populateEmails = async _ => {
    try {
        let results = await Email.find();

        emailSchedules = results;
    } catch (err) {
        console.log(err);
    }
};

module.exports = { createEmail, deleteEmail, getEmails, checkEmailDueTime, populateEmails };