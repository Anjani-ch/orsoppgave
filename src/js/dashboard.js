const dashboard = document.querySelector('#dashboard');

if (dashboard) {
    dashboard.addEventListener('click', e => {
        if (e.target.tagName === 'I') {
            const parentEl = e.target.parentElement;
            
            const userID = parentEl.getAttribute('data-userId');
            const isAdmin = parentEl.getAttribute('data-isAdmin');

            const request = { endpoint: '', method: '' };

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

                    console.log(tableRowsInTable.length)

                    if (tableRowsInTable.length === 1) {
                        console.log(tableRowsInTable);
                        // console.log(currTableRow)
                        parentTable.remove();
                    }
                })
                .catch(err => console.log(err))
                // .then(res => res.json())
                // .then(data => window.location.href = data.redirect)
                // .catch(err => console.log(err));
        }
    });
}