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

import { initSocketConnection } from './socket.js';

import { THEME_STORAGE_KEY } from './keys.js';
import updateRootTheme from './utilities/updateRootTheme.js';

const nav = document.querySelector('nav');

window.addEventListener('DOMContentLoaded', e => {
    const body = document.querySelector('body');
    const userTheme = body.getAttribute('data-theme');

    sessionStorage.setItem(THEME_STORAGE_KEY, userTheme);

    updateRootTheme(userTheme);

    initSocketConnection();
});