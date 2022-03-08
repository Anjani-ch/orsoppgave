// Stylesheet
import '../css/styles.css';

// Scripts
import './navbar.js';
import './footer.js';
import './collapse.js';
import './alert.js';
import './profileDropdown';
import './settings.js';
import './particleEffect.js';

import { THEME_STORAGE_KEY } from './keys.js';
import updateRootTheme from './utilities/updateRootTheme.js';

window.addEventListener('DOMContentLoaded', e => {
    const themeInStorage = localStorage.getItem(THEME_STORAGE_KEY);

    updateRootTheme(themeInStorage ? themeInStorage : 'light');
});