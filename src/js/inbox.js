const inbox = document.querySelector('#inbox');

if(inbox) {
    const addMsgBtn = document.querySelector('#add-msg-btn');
    const msgReceiverInput = document.querySelector('#msg-receiver');
    const searchResults = document.querySelector('#email-search-results');

    inbox.addEventListener('click', e => {
        if(!e.target.classList.contains('search-result') && e.target.id !== 'email-search-results') {
            if(!searchResults.classList.contains('d-none')) {
                searchResults.classList.add('d-none');
                searchResults.innerHTML = '';
            }
        } else if(e.target.classList.contains('search-result')) {
            msgReceiverInput.value = e.target.getAttribute('data-email');
            searchResults.classList.add('d-none');
            searchResults.innerHTML = '';
        }
    });

    addMsgBtn.addEventListener('click', e => {
        const addMsgForm = document.querySelector('#add-msg-form');

        addMsgForm.classList.toggle('d-none');

        if(!addMsgForm.classList.contains('d-none')) {
            e.target.innerText = 'Close';
        } else {
            e.target.innerText = 'Send Message';
        }
    });

    msgReceiverInput.addEventListener('keyup', e => {
        fetch(`/user?email=${e.target.value}`)
            .then(res => res.json())
            .then(({ results }) => {
                if(e.target.value) {
                    searchResults.innerHTML = '';

                    results.forEach(result => {
                        const emailResult = document.createElement('DIV');

                        emailResult.setAttribute('data-email', result);

                        emailResult.className = 'search-result';

                        emailResult.innerText = result;

                        searchResults.appendChild(emailResult);
                    });
                } else {
                    searchResults.innerHTML = '';
                }
            })
            .catch(err => console.log(err));
    });
}