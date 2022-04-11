const { formatWithDateAndTime } = require('../modules/date.js');

let io;

const initSocketConnection = serverPort => {
    const SOCKET_PORT = 5000;

    io = require('socket.io')(SOCKET_PORT, {
        cors: [`http://localhost:${serverPort}`]
    });

    console.log(`Socket server running on port ${SOCKET_PORT}`);
};

const sendNotificationToClient = notification => {
    io.sockets.emit('send-notification', {
        ...notification._doc,
        dueTime: formatWithDateAndTime(notification.dueTime)
    });
};

const sendEmailToClient = email => {
    io.sockets.emit('send-email', {
        ...email._doc,
        dueTime: formatWithDateAndTime(notification.dueTime)
    });
};

module.exports = { initSocketConnection, sendNotificationToClient, sendEmailToClient };