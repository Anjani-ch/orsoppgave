const profileDropdownBtn = document.querySelector('#profile-dropdown-btn');
const profileDropdownContent = document.querySelector('#profile-dropdown-content');

if(profileDropdownBtn && profileDropdownContent) {
    profileDropdownBtn.addEventListener('click', _ => profileDropdownContent.classList.toggle('d-none'));
    
    window.addEventListener('click', e => {
        const isVisible = !profileDropdownContent.classList.contains('d-none');

        if(e.target.tagName !== 'HTML') {
            if(e.target.id) {
                const isNotDropdown = e.target.id !== profileDropdownContent.id && e.target.parentElement.id !== profileDropdownBtn.id && e.target.id !== profileDropdownBtn.id;

                if(isNotDropdown && isVisible) {
                    if(profileDropdownContent) {
                        profileDropdownContent.classList.add('d-none');
                    }
                }
            }
        } else if(isVisible) {
            if(profileDropdownContent) {
                profileDropdownContent.classList.add('d-none');
            }
        }
    });
}