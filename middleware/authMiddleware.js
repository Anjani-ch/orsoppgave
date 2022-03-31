const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        req.flash('errorMsg', 'Log in to access this resource');
        res.redirect('/login');
    }
}

const isLoggedOut = (req, res, next) => !req.isAuthenticated() ? next() : res.redirect('/');

const isAdmin = (req, res, next) => req.user !== undefined && req.user.isAdmin ? next() : res.redirect('/');

const isSuperAdmin = (req, res, next) => req.user !== undefined && req.user.isSuperAdmin ? next() : res.redirect('/');

module.exports = { isLoggedIn, isLoggedOut, isAdmin, isSuperAdmin };