const { Notification } = require('../models/Notification.js');

/* 
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
*/

const createNotification = async (req, res, data) => {
    const notification = new Notification(data);

    try {
        await notification.save();
    } catch (err) {
        console.log(err);
    }
};

const deleteNotification = async (req, res, id) => {
    try {
        await Notification.deleteOne({ _id: id });
    } catch (err) {
        console.log(err);
    }
};

module.exports = { createNotification, deleteNotification };