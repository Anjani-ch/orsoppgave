const express = require('express');
const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');

const { getYear } = require('../modules/date.js');

const User = require('../models/User.js');

const router = express.Router();

// Index Routes
router.get('/', (req, res) => res.render('index', { title: 'Home', year: getYear() }));

// Job Experience Routes
router.get('/job-experience', (req, res) => res.render('job-experience', { title: 'Job Experience', year: getYear() }));

// Education Routes
router.get('/education', (req, res) => res.render('education', { title: 'Education', year: getYear() }));

router.get('/projects', (req, res) => res.render('projects', { title: 'Projects', year: getYear() }));

// Login Routes
router.get('/login', (req, res) => res.render('login', { title: 'Login', year: getYear() }));

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    const errors = [];

    // Check If User Exists

});

// Signup Routes
router.get('/signup', (req, res) => res.render('signup', { title: 'Signup', year: getYear() }));

router.post('/signup', (req, res) => {
    const { username, email, password, confirmPassword } = req.body;

    const errors = [];
    const passwordMinChars = 6;

    // Check For Empty Fields
    if (!username || !email || !password || !confirmPassword) errors.push('Please fill all fields');

    // Check If Valid Email
    if (emailValidator.validate(email)) errors.push('Invalid email');

    // Check If Matching Passwords
    if (password !== confirmPassword) errors.push('Passwords not matching');

    // Check Password Length
    if (password.length < passwordMinChars) errors.push(`Password must be minimum characters ${passwordMinChars} long`);

    // Check For Duplicated Email
    User.findOne({ email: email }, (err, user) => {
        if (err) throw err;

        if (user) errors.push('Email already in use');
    })
    
    // Check For Duplicate Username
    User.findOne({ username: username }, (err, user) => {
        if (err) throw err;

        // Check If Username Exists
        if (user) errors.push('Username already in use');
    })
console.log(errors)
    // Validation Passed
    if (!errors.length) {
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
                    res.redirect('/login');
                });
            });
        });
    } else {
        res.render('signup', { title: 'Signup', year: getYear(), errors });
    }
});

// Download Routes
router.get('/download/resume', (req, res) => res.download('src/docs/cv.pdf'));

module.exports = router;