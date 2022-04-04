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
    const nav = document.querySelector('nav');
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
            }
        })
        .catch(err => console.log(err));
});