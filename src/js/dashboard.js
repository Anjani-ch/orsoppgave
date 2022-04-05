import createAlert from './utilities/createAlert.js';

const dashboard = document.querySelector('#dashboard');

if(dashboard) {
    const addNotificationBtn = document.querySelector('#add-notification-btn');
    const addEmailBtn = document.querySelector('#add-email-btn');
    const addNotificationForm = document.querySelector('#add-notification-form');
    const addEmailForm = document.querySelector('#add-email-form');


    dashboard.addEventListener('click', e => {
        if(e.target.classList.contains('admin-action')) {
            const parentEl = e.target.parentElement;
            
            const userID = parentEl.getAttribute('data-userId');
            const isAdmin = parentEl.getAttribute('data-isAdmin');

            const request = { endpoint: '', method: '' };
            const alert = { message: '', type: '' };

            if(e.target.classList.contains('delete-user')) {
                if (isAdmin) {
                    request.endpoint = `/admin/delete/${userID}`;
                } else {
                    request.endpoint = `/user/delete/${userID}`;
                }

                request.method = 'DELETE';
            } else if(e.target.classList.contains('promote-user')) {
                request.endpoint = `/user/promote/${userID}`;
                request.method = 'PUT';
            }

            fetch(request.endpoint, { method: request.method })
                .then(res => res.json())
                .then(data => {
                    const userTable = document.querySelector('#user-table');
                    const adminTable = document.querySelector('#admin-table');

                    const currTableRow = parentEl.parentElement;
                    const parentTable = currTableRow.parentElement;
                    
                    let tableRowsInTable;

                    if(request.method === 'PUT') {
                        const tableRow = document.createElement('DIV');

                        const { username, email, isAdmin, _id } = data.user;

                        let tableRowsInAdminTable;

                        tableRow.className = 'table-row text-center';

                        tableRow.innerHTML = `
                            <p>${username}</p>
                            <p>${email}</p>
                            <p data-userId="${_id}" data-isAdmin="${isAdmin}"><i class="fa-solid fa-trash delete delete-user admin-action"></i></p>
                        `;
                        
                        adminTable.appendChild(tableRow);

                        tableRowsInAdminTable = Array.from(adminTable.children).filter(child => child.classList.contains('table-row'));

                        if(tableRowsInAdminTable.length === 2) {
                            adminTable.classList.remove('d-none-important');
                        }
                    }

                    currTableRow.remove();

                    tableRowsInTable = Array.from(parentTable.children).filter(child => child.classList.contains('table-row'));

                    if(tableRowsInTable.length === 1) {
                        if(parentTable === userTable) {
                            parentTable.remove();
                        } else if(parentTable === adminTable) {
                            parentTable.classList.add('d-none-important');
                        }
                    }

                    if(request.method === 'PUT') alert.message = 'Promoted user';
                    if(request.method === 'DELETE') alert.message = 'Deleted user';

                    alert.type = 'success';
                })
                .catch(err => {
                    if(request.method === 'PUT') alert.message = 'Error promoted user';
                    if(request.method === 'DELETE') alert.message = 'Error deleted user';

                    alert.type = 'error';

                    console.log(err);
                })
                .finally(_ => dashboard.prepend(createAlert(alert.message, alert.type)));
        }
    });

    addNotificationBtn.addEventListener('click', e => {
        addNotificationForm.classList.toggle('d-none');

        if(!addNotificationForm.classList.contains('d-none')) {
            e.target.innerText = 'Close';
        } else {
            e.target.innerText = 'Send Message';
        }
    });

    addEmailBtn.addEventListener('click', e => {
        addEmailForm.classList.toggle('d-none');

        if(!addEmailForm.classList.contains('d-none')) {
            e.target.innerText = 'Close';
        } else {
            e.target.innerText = 'Send Message';
        }
    });

    addNotificationForm.addEventListener('submit', e => {
        e.preventDefault();

        const { notificationMsg, notificationTime } = e.target;

        const date = new Date(notificationTime.value)

        console.log(date)
    });

    addEmailForm.addEventListener('submit', e => {
        e.preventDefault();

        const { emailSubject, emailBody, emailTime } = e.target;

        const date = new Date(emailTime.value)

        console.log(date)
    });
}