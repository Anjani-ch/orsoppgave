// Stylesheet
import '../css/styles.css';

// Scripts
import './navbar.js';
import './footer.js';
import './particleEffect.js';
import './collapse.js';
import './alert.js';
import './toast.js';
import './profileDropdown';
import './inbox.js';
import './settings.js';
import './dashboard.js';

import {
    connectSocketClient,
    handleSocketNotification,
    handleSocketEmail
} from './controllers/socketController.js';

import { THEME_STORAGE_KEY } from './keys.js';
import updateRootTheme from './utilities/updateRootTheme.js';
import { createToastAndAppend } from './utilities/createToast.js';

window.addEventListener('DOMContentLoaded', e => {
    const body = document.querySelector('body');
    const userTheme = body.getAttribute('data-theme');

    sessionStorage.setItem(THEME_STORAGE_KEY, userTheme);

    updateRootTheme(userTheme);

    fetch('/user')
        .then(res => res.json())
        .then(({ user }) => {
            if(user) {
                connectSocketClient();

                if(user.wantsPushNotifications) {
                    handleSocketNotification(createToastAndAppend);
                }

                handleSocketEmail();
            }
        })
        .catch(err => console.log(err));
});