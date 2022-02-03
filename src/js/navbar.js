const body = document.querySelector('body');
const menuBtn = document.querySelector('#menu-btn');

menuBtn.addEventListener('click', _ => {
    menuBtn.classList.toggle('open');
    body.classList.toggle('overflow-hidden');
});