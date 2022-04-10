import { THEME_STORAGE_KEY, SETTINGS_SECTION_SESSION_KEY } from './keys.js';
import { createToastAndAppend } from './utilities/createToast.js';
import updateRootTheme from './utilities/updateRootTheme.js';
import { handleSocketNotification, connectSocketClient, disconnectSocketClient } from './controllers/socketController.js';

const settings = document.querySelector('#settings');
const settingsAside = document.querySelector('#settings-aside');
const settingsSections = document.querySelectorAll('#settings section');
const deleteAccountBtn = document.querySelector('#delete-account-btn');
const accountOptions = document.querySelector('#account-options');
const themeSelect = document.querySelector('#theme-select');

const showSelectedSection = sectionId => {
    if(sectionId) {
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

if(settings) {
    settings.addEventListener('click', e => {
        const isAsideElement = e.target.parentElement === settingsAside;
        const isThemeSelectElement = e.target === themeSelect;
        const isDeleteAccountBtn = e.target === deleteAccountBtn;

        if(isAsideElement) {
            const link = e.target;
            const linkTarget = link.dataset.target;
            const isLink = link.classList.contains('aside-link');
            
            if(isLink) {
                showSelectedSection(linkTarget);
                sessionStorage.setItem(SETTINGS_SECTION_SESSION_KEY, linkTarget);
            }
        }
        
        if(isThemeSelectElement) {
            const themeInStorage = sessionStorage.getItem(THEME_STORAGE_KEY); 
            const selectedTheme = e.target.value;

            if(!themeInStorage || (themeInStorage !== selectedTheme)) {
                const requestOptions = {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ theme: selectedTheme })
                };

                fetch('/user/update', requestOptions)
                    .then(_ => {
                        // Update Theme In Storage
                        sessionStorage.setItem(THEME_STORAGE_KEY, selectedTheme);
                        updateRootTheme(selectedTheme);
                    })
                    .catch(err => {
                        const preferences = document.querySelector('#preferences');
                        
                        preferences.prepend(createAlert('Error changing theme', 'error'))
                        console.log(err);
                    });
            }
        }

        if(isDeleteAccountBtn) {
            fetch('/user/delete', { method: 'DELETE' })
                .then(res => res.json())
                .then(data => window.location.href = data.redirect)
                .catch(err => {
                    const account = document.querySelector('#account');
                    
                    account.prepend(createAlert('Error deleting account', 'error'))
                    console.log(err);
                });
        }
    });

    accountOptions.addEventListener('change', e => {
        const updatedData = {};

        let requestOptions;

        switch(e.target.id) {
            case 'mail-notification':
                updatedData.wantsEmailNotifications = e.target.checked;
                break;
            case 'push-notification':
                updatedData.wantsPushNotifications = e.target.checked;

                if(e.target.checked) {
                    handleSocketNotification(createToastAndAppend);
                } else {
                    disconnectSocketClient();
                    connectSocketClient();
                }
                break;
        }

        requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedData)
        };

        fetch('/user/update', requestOptions)
            .catch(err => console.log(err));
    });
    
    window.addEventListener('DOMContentLoaded', e => {
        const themeInStorage = sessionStorage.getItem(THEME_STORAGE_KEY);
        const settingsSectionInSession = sessionStorage.getItem(SETTINGS_SECTION_SESSION_KEY);

        showSelectedSection(settingsSectionInSession);

        // Update Select Storage Value If Theme In Storage
        if(themeInStorage) themeSelect.value = themeInStorage;
    });
}