window.addEventListener('click', e => {
    if(e.target.classList.contains('close-toast')) {
        const targetID = e.target.getAttribute('data-toast-target-id');
        const toast = document.querySelector(`[data-toast-id="${targetID}"]`);

        toast.remove();
    }
});