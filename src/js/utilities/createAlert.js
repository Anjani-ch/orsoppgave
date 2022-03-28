const createAlert = (message, type) => {
    const alertElement = document.createElement('DIV');
    const alertMessageElement = document.createElement('P');
    const alertIcon = document.createElement('I');

    alertElement.className = `alert ${type}`;
    alertIcon.className = 'fa-solid fa-xmark alert-icon';

    alertMessageElement.innerText = message;

    alertElement.appendChild(alertMessageElement);
    alertElement.appendChild(alertIcon);

    return alertElement;
};

export default createAlert;