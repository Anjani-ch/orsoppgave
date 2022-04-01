const inbox = document.querySelector('#inbox');
const addMsgBtn = document.querySelector('#add-msg-btn');

if(inbox) {
    addMsgBtn.addEventListener('click', e => {
        const addMsgForm = document.querySelector('#add-msg-form');

        addMsgForm.classList.toggle('d-none');

        if(!addMsgForm.classList.contains('d-none')) {
            e.target.innerText = 'Close';
        } else {
            e.target.innerText = 'Send Message';
        }
    });
}