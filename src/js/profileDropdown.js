const profileDropdownBtn = document.querySelector('#profile-dropdown-btn');
const profileDropdownContent = document.querySelector('#profile-dropdown-content');

if (profileDropdownBtn && profileDropdownContent) {
    profileDropdownBtn.addEventListener('click', _ => profileDropdownContent.classList.toggle('d-none'));
    
    window.addEventListener('click', e => {
        const isNotDropdown = e.target.id !== profileDropdownContent.id && e.target.parentElement.id !== profileDropdownBtn.id && e.target.id !== profileDropdownBtn.id;

        if (isNotDropdown) profileDropdownContent.classList.add('d-none');
    });
}