window.addEventListener('click', e => {
    if(e.target.classList.contains('alert-icon')) {
        e.target.parentElement.classList.add('d-none-important');
    }
});