const emailValidator = require('email-validator');
const passport = require('passport');

const { renderSignup } = require('./viewController.js');

const { createUser } = require('./userController.js');

const { User } = require('../models/User.js');
const { Admin } = require('../models/Admin.js');
const { SuperAdmin } = require('../models/SuperAdmin.js');

const handleSignup = async (req, res) => {
    const {
        username,
        email,
        password,
        confirmPassword,
        mailNotification,
        pushNotification
    } = req.body;

    const errors = [];
    const passwordMinChars = 6;

    let isDuplicateEmail;
    let isDuplicateUsername;

    try {
        const userWithEmail = await User.findOne({ email });
        const adminWithEmail = await Admin.findOne({ email });
        const superAdminWithEmail = await SuperAdmin.findOne({ email });

        const userWithUsername = await User.findOne({ username });
        const adminWithUsername = await Admin.findOne({ username });
        const superAdminWithUsername = await SuperAdmin.findOne({ username });

        isDuplicateEmail = userWithEmail || adminWithEmail || superAdminWithEmail;
        isDuplicateUsername = userWithUsername || adminWithUsername || superAdminWithUsername;
    } catch (err) {
        console.log(err);
    }

    if (isDuplicateEmail) errors.push('Email already in use');

    if (isDuplicateUsername) errors.push('Username already in use');

    if (!username || !email || !password || !confirmPassword) errors.push('Please fill all fields');

    if (!emailValidator.validate(email)) errors.push('Invalid email');

    if (password !== confirmPassword) errors.push('Passwords not matching');

    if (password.length < passwordMinChars) errors.push(`Password must be minimum ${passwordMinChars} characters long`);

    if (!errors.length) {
        const wantsEmailNotifications = mailNotification ? true : false;
        const wantsPushNotifications = pushNotification ? true : false;

        const userData = {
            username,
            email,
            password,
            wantsEmailNotifications,
            wantsPushNotifications
        };

        createUser(req, res, userData);
    } else {
        renderSignup(req, res, { errors, ...req.body });
    }
};

const handleLogin = (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true,
    })(req, res, next);
};

const handleLogout = (req, res) => {
    req.logout();
    req.flash('successMsg', 'You are logged out');
    res.redirect('/login');
};

module.exports = { handleSignup, handleLogin, handleLogout };