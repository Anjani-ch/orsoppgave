const mongoose = require('mongoose');

const notificationObj = {
    message: {
        type: String,
        required: true,
    },
    dueTime: {
        type: Date,
        required: true
    },
};

const notificationSchema = new mongoose.Schema(notificationObj);

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = { Notification, notificationObj };