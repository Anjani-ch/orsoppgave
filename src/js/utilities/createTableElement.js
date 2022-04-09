const createTableElement = (data, type) => {
    const tableRow = document.createElement('DIV');
    const firstColumn = document.createElement('P');
    const secondColumn = document.createElement('P');
    const thirdColumn = document.createElement('P');
    const deleteIcon = document.createElement('I');

    tableRow.className = 'table-row text-center';
    deleteIcon.className = 'fa-solid fa-trash delete ';

    switch(type) {
        case 'user':
            firstColumn.innerText = data.username;
            secondColumn.innerText = data.email;

            deleteIcon.className += 'delete-user admin-action';

            thirdColumn.setAttribute('data-isAdmin', data.isAdmin);
            thirdColumn.setAttribute('data-userId', data._id);
            break;
        case 'notification':
            firstColumn.innerText = data.message;
            secondColumn.innerText = data.dueTime;

            deleteIcon.className += 'delete-event';

            tableRow.setAttribute('data-notification-wrapper', data.id);
            thirdColumn.setAttribute('data-id', data.id);
            break;
        case 'email':
            return;
            break;
    }

    tableRow.appendChild(firstColumn);
    tableRow.appendChild(secondColumn);
    tableRow.appendChild(thirdColumn);

    thirdColumn.appendChild(deleteIcon);

    return tableRow;
};

export default createTableElement;