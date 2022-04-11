const createToast = data => {
    const toast = document.createElement('DIV');
    const toastHeader = document.createElement('DIV');
    const toastHeaderText = document.createElement('STRONG');
    const closeToastIcon = document.createElement('I');
    const toastBody = document.createElement('DIV');

    toastHeaderText.innerText = data.dueTime;
    toastBody.innerText = data.message;

    toast.className = 'toast';
    toastHeader.className = 'toast-header';
    closeToastIcon.className = 'fa-solid fa-xmark close-toast';
    toastBody.className = 'toast-body';

    toast.setAttribute('data-toast-id', data._id);
    closeToastIcon.setAttribute('data-toast-target-id', data._id);

    toast.appendChild(toastHeader);
    toast.appendChild(toastBody);

    toastHeader.appendChild(toastHeaderText);
    toastHeader.appendChild(closeToastIcon);

    return toast;
};

const createToastAndAppend = data => {
    const toastContainer = document.querySelector('.toast-container');

    toastContainer.appendChild(createToast(data));
};

export { createToast, createToastAndAppend };