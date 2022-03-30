const body = document.querySelector('body');
const menuBtn = document.querySelector('#menu-btn');

if(menuBtn) {
    menuBtn.addEventListener('click', e => {
        menuBtn.classList.toggle('open');
        body.classList.toggle('overflow-hidden');
    });
}