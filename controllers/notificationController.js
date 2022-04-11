const { formatWithDateAndTime, isDueTime } = require('../modules/date.js');

const { Notification } = require('../models/Notification.js');

const { sendNotificationToClient } = require('./socketController.js');

let notificationSchedules = [];

const createNotification = async (req, res, data) => {
    const notification = new Notification(data);
    
    try {
        await notification.save();

        notificationSchedules.push(notification);

        data.dueTime = formatWithDateAndTime(data.dueTime);

        return { ...data, id: notification.id };
    } catch (err) {
        console.log(err);
    }
};

const deleteNotification = async id => {
    try {
        await Notification.deleteOne({ _id: id });

        notificationSchedules = notificationSchedules.filter(notification => notification.id !== id);
    } catch (err) {
        console.log(err.message);
    }
};

const getNotifications = async _ => {
    try {
        const results = await Notification.find();

        return results;
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Error getting notifications' });
    }
};

const checkNotificationDueTime = async _ => {
    notificationSchedules.forEach(notification => {
        const { dueTime } = notification;

        const now = new Date(Date.now());
        const dueTimeDate = new Date(dueTime.getTime());

        if(isDueTime(dueTime)) {
            sendNotificationToClient(notification);
            deleteNotification(notification.id);
        } else if(now > dueTimeDate) {
            deleteNotification(notification.id);
        }
    });
};

const populateNotifications = async _ => {
    try {
        let results = await Notification.find();

        notificationSchedules = results;
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    createNotification,
    deleteNotification,
    getNotifications,
    populateNotifications,
    checkNotificationDueTime
};