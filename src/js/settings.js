import { THEME_STORAGE_KEY, SETTINGS_SECTION_SESSION_KEY } from './keys.js';

const root = document.querySelector(':root');
const settings = document.querySelector('#settings');
const settingsAside = document.querySelector('#settings-aside');
const settingsSections = document.querySelectorAll('#settings section');
const themeSelect = document.querySelector('#theme-select');

const updateRootTheme = className => {
    root.className = className;
}

const showSelectedSection = sectionId => {
    if (sectionId) {
        // Hide All Sections
        settingsSections.forEach(section => {
            const isVisible = !section.classList.contains('d-none');

            if (isVisible) section.classList.add('d-none');
        });

        // Show Selected Section
        settingsSections.forEach(section => {
            const isSameId = section.id === sectionId;
            
            if (isSameId) section.classList.remove('d-none');
        });
    }
};

if (settings) {
    settings.addEventListener('click', e => {
        const isAsideElement = e.target.parentElement === settingsAside;
        const isThemeSelectElement = e.target === themeSelect;

        if (isAsideElement) {
            const link = e.target;
            const linkTarget = link.dataset.target;
            const isLink = link.classList.contains('aside-link');
            
            if (isLink) {
                showSelectedSection(linkTarget);
                sessionStorage.setItem(SETTINGS_SECTION_SESSION_KEY, linkTarget);
            }
        }
        
        if (isThemeSelectElement) {
            const themeInStorage = localStorage.getItem(THEME_STORAGE_KEY); 
            const selectedTheme = e.target.value;

            if (!themeInStorage || (themeInStorage && (themeInStorage !== selectedTheme))) localStorage.setItem(THEME_STORAGE_KEY, selectedTheme); // Update Theme In Storage
            updateRootTheme(selectedTheme);
        }
    });

    window.addEventListener('DOMContentLoaded', e => {
        const themeInStorage = localStorage.getItem(THEME_STORAGE_KEY);
        const settingsSectionInSession = sessionStorage.getItem(SETTINGS_SECTION_SESSION_KEY);

        showSelectedSection(settingsSectionInSession);

        // Update Select Storage Value If Theme In Storage
        if (themeInStorage) themeSelect.value = themeInStorage;
    });
}