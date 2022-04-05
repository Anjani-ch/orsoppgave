const mongoose = require('mongoose');

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

const emailSchema = new mongoose.Schema(emailObj);

const Email = mongoose.model('Notification', emailSchema);

module.exports = { Email, emailObj };