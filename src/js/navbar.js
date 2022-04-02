const menuBtn = document.querySelector('#menu-btn');

if(menuBtn) {
    menuBtn.addEventListener('click', e => {
        const body = document.querySelector('body');

        menuBtn.classList.toggle('open');
        body.classList.toggle('overflow-hidden');
    });
}