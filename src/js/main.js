// Stylesheet
import '../css/styles.css';

// Scripts
import './navbar.js';
import './footer.js';
import './particleEffect.js';
import './collapse.js';
import './alert.js';
import './profileDropdown';
import './inbox.js';
import './settings.js';
import './dashboard.js';

import { io } from 'socket.io-client';

import { THEME_STORAGE_KEY } from './keys.js';
import updateRootTheme from './utilities/updateRootTheme.js';

window.addEventListener('DOMContentLoaded', e => {
    const body = document.querySelector('body');
    const userTheme = body.getAttribute('data-theme');

    sessionStorage.setItem(THEME_STORAGE_KEY, userTheme);

    updateRootTheme(userTheme);

    fetch('/user')
        .then(res => res.json())
        .then(({ user }) => {
            if(user) {
                const socket = io('http://localhost:5000');

                socket.on('notification-sendt', payload => {
                    console.log('data-received');
                    console.log(payload);
                });

                socket.on('send-notification', notification => {
                    console.log('notification live from server');
                    console.log(notification);
                    const notificatonElement = document.querySelector(`[data-notification-wrapper="${notification._id}"]`);

                    notificatonElement.remove();
                });

                socket.on('send-email', email => {
                    console.log('email live from server');
                    console.log(email);
                    const emailElement = document.querySelector(`[data-notification-wrapper="${email._id}"]`);

                    emailElement.remove();
                });
            }
        })
        .catch(err => console.log(err));
});