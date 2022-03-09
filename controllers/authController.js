const emailValidator = require('email-validator');
const passport = require('passport');

const { renderSignup } = require('./viewController.js');

const { createUser } = require('./userController.js');
const { createAdmin } = require('./adminController.js');

const User = require('../models/User.js');
const Admin = require('../models/Admin.js');

const handleSignup = (req, res) => {
    const {
        username,
        email,
        password,
        confirmPassword,
        mailNotification,
        pushNotification,
        isAdmin
    } = req.body;

    const errors = [];
    const passwordMinChars = 6;

    // Check For Empty Fields
    if (!username || !email || !password || !confirmPassword) errors.push('Please fill all fields');

    // Check If Valid Email
    if (!emailValidator.validate(email)) errors.push('Invalid email');

    // Check If Matching Passwords
    if (password !== confirmPassword) errors.push('Passwords not matching');

    // Check Password Length
    if (password.length < passwordMinChars) errors.push(`Password must be minimum ${passwordMinChars} characters long`);


    if (!errors.length) {
        // Form Validation Passed
        User.findOne({ email })
            .then(user => {
                let isDuplicateEmail = user ? true : false;

                if (user) {
                    errors.push('Email already in use');
                    renderSignup(req, res, { errors });
                }

                User.findOne({ username })
                    .then(user => {
                        let isDuplicateUsername = user ? true : false;

                        if (user) {
                            errors.push('Username already in use');
                            renderSignup(req, res, { errors });
                        }

                        if (!isDuplicateEmail && !isDuplicateUsername)  {
                            const wantsEmailNotifications = mailNotification ? true : false;
                            const wantsPushNotifications = pushNotification ? true : false;

                            if (isAdmin) {
                                Admin.findOne({ email })
                                .then(user => {
                                    let isDuplicateEmail = user ? true : false;

                                    if (user) {
                                        errors.push('Email already in use');
                                        renderSignup(req, res, { errors });
                                    }

                                    Admin.findOne({ username })
                                        .then(user => {
                                            let isDuplicateUsername = user ? true : false;

                                            if (user) {
                                                errors.push('Username already in use');
                                                renderSignup(req, res, { errors });
                                            }

                                            if (!isDuplicateEmail && !isDuplicateUsername)  {
                                                const userData = {
                                                    username,
                                                    email,
                                                    password,
                                                    wantsEmailNotifications,
                                                    wantsPushNotifications,
                                                    isAdmin: isAdmin ? true : false
                                                };

                                                createAdmin(req, res, userData);
                                            }
                                        })
                                        .catch(err => console.log(err));
                                })
                                .catch(err => console.log(err));
                            } else {
                                const userData = {
                                    username,
                                    email,
                                    password,
                                    wantsEmailNotifications,
                                    wantsPushNotifications
                                };

                                createUser(req, res, userData);
                            }
                        }
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    } else {
        // Validation Failed
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