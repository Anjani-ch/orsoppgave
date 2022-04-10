import { io } from 'socket.io-client';

let socket;

const connectSocketClient = _ => socket = io('http://localhost:5000');

const disconnectSocketClient = _ => socket.disconnect();

const handleSocketNotification = callback => {
    socket.on('send-notification', notification => {
        const notificatonElement = document.querySelector(`[data-notification-wrapper="${notification._id}"]`);

        if(notificatonElement) {
            const parentElement = notificatonElement.parentElement;
            let parentElementChildren;

            notificatonElement.remove();

            parentElementChildren = Array.from(parentElement.children).filter(element => element.classList.contains('table-row'));

            if(parentElementChildren.length === 1) parentElement.classList.add('d-none');
        }

        callback(notification);

        console.log('notification live from server');
        console.log(notification);
    });
};

const handleSocketEmail = _ => {
    socket.on('send-email', email => {
        const emailElement = document.querySelector(`[data-notification-wrapper="${email._id}"]`);

        if(emailElement) {
            const parentElement = emailElement.parentElement;
            let parentElementChildren;

            emailElement.remove();

            parentElementChildren = Array.from(parentElement.children).filter(element => element.classList.contains('table-row'));

            if(parentElementChildren.length === 1) parentElement.classList.add('d-none');
        }

        console.log('email live from server');
        console.log(email);
    });
};

export {
    connectSocketClient,
    disconnectSocketClient,
    handleSocketNotification,
    handleSocketEmail
};