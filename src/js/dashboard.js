import createAlert from './utilities/createAlert.js';

const dashboard = document.querySelector('#dashboard');

if (dashboard) {
    dashboard.addEventListener('click', e => {
        if (e.target.classList.contains('admin-action')) {
            const parentEl = e.target.parentElement;
            
            const userID = parentEl.getAttribute('data-userId');
            const isAdmin = parentEl.getAttribute('data-isAdmin');

            const request = { endpoint: '', method: '' };
            const alert = { message: '', type: '' };

            if (e.target.classList.contains('delete-user')) {
                if (isAdmin) request.endpoint = `/admin/delete/${userID}`;
                else request.endpoint = `/user/delete/${userID}`;

                request.method = 'DELETE';
            } else if (e.target.classList.contains('promote-user')) {
                request.endpoint = `/user/promote/${userID}`;
                request.method = 'PUT';
            }

            fetch(request.endpoint, { method: request.method })
                .then(res => res.json())
                .then(data => {
                    const currTableRow = parentEl.parentElement;
                    const parentTable = currTableRow.parentElement;
                    
                    let tableRowsInTable;

                    if (request.method === 'PUT') {
                        const adminTable = document.querySelector('#admin-table');
                        const tableRow = document.createElement('DIV');

                        const { username, email, isAdmin, id } = data.user;

                        tableRow.className = 'table-row text-center';

                        tableRow.innerHTML = `
                            <p>${username}</p>
                            <p>${email}</p>
                            <p data-userId="${id}" data-isAdmin="${isAdmin}"><i class="fa-solid fa-trash delete delete-user"></i></p>
                        `;
                        
                        adminTable.appendChild(tableRow);
                    }

                    currTableRow.remove();

                    tableRowsInTable = Array.from(parentTable.children).filter(child => child.classList.contains('table-row'));

                    if (tableRowsInTable.length === 1) parentTable.remove();

                    if (request.method === 'PUT') alert.message = 'Promoted user';
                    if (request.method === 'DELETE') alert.message = 'Deleted user';

                    alert.type = 'success';
                })
                .catch(err => {
                    if (request.method === 'PUT') alert.message = 'Error promoted user';
                    if (request.method === 'DELETE') alert.message = 'Error deleted user';

                    alert.type = 'error';

                    console.log(err);
                })
                .finally(_ => {
                    dashboard.prepend(createAlert(alert.message, alert.type));
                });
                // .then(res => res.json())
                // .then(data => window.location.href = data.redirect)
                // .catch(err => console.log(err));
        }
    });
}