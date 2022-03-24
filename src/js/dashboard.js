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
                .then(data => window.location.href = data.redirect)
                .catch(err => console.log(err));
        }
    });
}