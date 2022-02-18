const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');
const passport = require('passport');

const User = require('../models/User.js');

const { renderSignup } = require('../controllers/viewController.js');
const { createdUser, deletedUser } = require('../controllers/logController.js');

const handleSignup = (req, res) => {
    const { username, email, password, confirmPassword } = req.body;

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

                        if (!isDuplicateEmail && !isDuplicateUsername) {
                            // Create User
                            const user = new User({ username, email, password });

                            bcrypt.genSalt(10, (err, salt) => {
                                if (err) throw err;

                                bcrypt.hash(user.password, salt, (err, hash) => {
                                    if (err) throw err;

                                    // Hash User Password
                                    user.password = hash;

                                    // Save User
                                    user.save(err => {
                                        if (err) throw err;

                                        createdUser(user);
                                        req.flash('successMsg', 'You are now registered');
                                        res.redirect('/login');
                                    });
                                });
                            });
                        }
                    })
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

const handleAccountDelete = (req, res) => {
    const { _id } = req.user;

    User.deleteOne({ _id })
        .then(({ deletedCount }) => {
            deletedUser(req.user);
            req.flash('successMsg', 'Account deleted');
            res.redirect('/signup');
        });
};

module.exports = { handleSignup, handleLogin, handleLogout, handleAccountDelete };