const settingsAside = document.querySelector('#settings-aside');
const settingsSections = document.querySelectorAll('#settings section');

if (settingsAside) {
    settingsAside.addEventListener('click', e => {
        const link = e.target;
        const isLink = link.tagName === 'A';
        
        if (isLink) { 
            settingsSections.forEach(section => {
                const isVisible = !section.classList.contains('d-none');
        
                if (isVisible) section.classList.add('d-none');
            });

            settingsSections.forEach(section => {
                const isSameId = section.id === link.href.split('#')[1];
                
                if (isSameId) section.classList.remove('d-none');
            });
        }
    });
}