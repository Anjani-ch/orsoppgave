window.addEventListener('click', e => { 
    if (e.target.tagName !== 'HTML') {
        let collapseHeading;
        
        if(e.target && e.target.classList.contains('collapse-heading')) {
            collapseHeading = e.target;
        } else if(e.target.parentElement && e.target.parentElement.classList.contains('collapse-heading')) {
            collapseHeading = e.target.parentElement;
        }

        if(collapseHeading) {
            collapseHeading.parentElement.classList.toggle('toggled');
        }
    }
});