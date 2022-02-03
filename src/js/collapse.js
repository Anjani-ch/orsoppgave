window.addEventListener('click', e => {
    let collapseHeading;

    if (e.target.classList.contains('collapse-heading')) collapseHeading = e.target;
    else if (e.target.parentElement.classList.contains('collapse-heading')) collapseHeading = e.target.parentElement;

    if(collapseHeading) collapseHeading.parentElement.classList.toggle('toggled');
});