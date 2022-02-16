const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) return next();
    req.flash('errorMsg', 'Log in to access this resource');
    res.redirect('/login');
}

const isLoggedOut = (req, res, next) => {
    if (!req.isAuthenticated()) return next();
    res.redirect('/');
}

module.exports = { isLoggedIn, isLoggedOut };