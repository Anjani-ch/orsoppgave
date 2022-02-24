import hasScrollbar from './hasScrollbar.js';

const footer = document.querySelector('footer');

const setFooter = _ => !hasScrollbar() ? footer.classList.add('footer-bottom') : footer.classList.remove('footer-bottom');

window.addEventListener('DOMContentLoaded', setFooter);
window.addEventListener('resize', setFooter);