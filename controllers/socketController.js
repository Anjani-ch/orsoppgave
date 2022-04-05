let io;

const handleSocketConnection = serverPort => {
    const SOCKET_PORT = 5000;

    io = require('socket.io')(SOCKET_PORT, {
        cors: [`http://localhost:${serverPort}`]
    });

    io.on('connection', socket => {
        setTimeout(_ => {
            console.log('data-sendt');
            socket.emit('notification-sendt', { message: 'Test' });
        }, 3000);
    });
};

module.exports = { handleSocketConnection };