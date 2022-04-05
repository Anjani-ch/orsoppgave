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