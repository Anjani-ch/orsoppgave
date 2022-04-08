import { io } from 'socket.io-client';

let socket;

const connectSocketClient = _ => socket = io('http://localhost:5000');;

const handleSocketNotification = _ => {
    socket.on('send-notification', notification => {
        const notificatonElement = document.querySelector(`[data-notification-wrapper="${notification._id}"]`);
        const parentElement = notificatonElement.parentElement;
        let parentElementChildren;

        notificatonElement.remove();

        parentElementChildren = Array.from(parentElement.children).filter(element => element.classList.contains('table-row'));

        if(parentElementChildren.length === 1) parentElement.classList.add('d-none');

        console.log('notification live from server');
        console.log(notification);
    });
};

const handleSocketEmail = _ => {
    socket.on('send-email', email => {
        console.log('email live from server');
        console.log(email);
        const emailElement = document.querySelector(`[data-notification-wrapper="${email._id}"]`);

        emailElement.remove();
    });
};

export {
    connectSocketClient,
    handleSocketNotification,
    handleSocketEmail
};