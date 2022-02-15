const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');
const passport = require('passport');

const { getYear } = require('../modules/date.js');

const User = require('../models/User.js');

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
    if (password.length < passwordMinChars) errors.push(`Password must be minimum characters ${passwordMinChars} long`);


    if (errors.length) {
        // TODO: Keep Form Values On Re-render
        res.render('signup', { title: 'Signup', year: getYear(), errors });
    } else {
        // Form Validation Passed
        User.findOne({ email })
            .then(user => {
                let isDuplicateEmail = user ? true : false;

                if (user) errors.push('Email already in use');

                User.findOne({ username })
                    .then(user => {
                    let isDuplicateUsername = user ? true : false;

                        if (user) {
                            errors.push('Username already in use');
                            res.render('signup', { title: 'Signup', year: getYear(), errors });
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

                                        req.flash('successMsg', 'You are now registered');
                                        res.redirect('/login');
                                    });
                                });
                            });
                        }
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    }
}

const handleLogin = (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next);
}

const handleLogout = (req, res) => {
    req.logout();
    req.flash('successMsg', 'You are logged out');
    res.redirect('/login');
}

module.exports = { handleSignup, handleLogin, handleLogout }