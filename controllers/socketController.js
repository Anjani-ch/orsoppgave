let io;

const initSocketConnection = serverPort => {
    const SOCKET_PORT = 5000;

    io = require('socket.io')(SOCKET_PORT, {
        cors: [`http://localhost:${serverPort}`]
    });

    console.log(`Socket server running on port ${SOCKET_PORT}`);
};

const sendNotificationToClient = notification => {
    io.emit('send-notification', notification);
};

module.exports = { initSocketConnection, sendNotificationToClient };