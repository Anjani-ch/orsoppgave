import hasScrollbar from './utilities/hasScrollbar.js';

const footer = document.querySelector('footer');

const setFooter = _ => {
    if(!hasScrollbar()) {
        footer.classList.add('footer-bottom')
    } else {
        footer.classList.remove('footer-bottom')
    }
};

window.addEventListener('DOMContentLoaded', setFooter);
window.addEventListener('resize', setFooter);
window.addEventListener('click', e => setTimeout(setFooter, 1));