const express = require('express');

const { getYear } = require('../modules/date.js');

const { isLoggedIn, isLoggedOut } = require('../config/auth.js');

const { handleLogin, handleSignup, handleLogout } = require('../controllers/authController.js');

const router = express.Router();

// Index Routes
router.get('/', (req, res) => res.render('index', { title: 'Home', year: getYear() }));

// Job Experience Routes
router.get('/job-experience', isLoggedIn, (req, res) => res.render('jobExperience', { title: 'Job Experience', year: getYear() }));

// Education Routes
router.get('/education', isLoggedIn, (req, res) => res.render('education', { title: 'Education', year: getYear() }));

// Projects
router.get('/projects', isLoggedIn, (req, res) => res.render('projects', { title: 'Projects', year: getYear() }));

// Signup Routes
router.get('/signup', isLoggedOut, (req, res) => res.render('signup', { title: 'Signup', year: getYear() }));
router.post('/signup', handleSignup);

// Login Routes
router.get('/login', isLoggedOut, (req, res) => res.render('login', { title: 'Login', year: getYear() }));
router.post('/login', handleLogin);

// Logout Route
router.post('/logout', handleLogout);

// Download Routes
router.get('/download/resume', (req, res) => res.download('src/docs/cv.pdf'));

module.exports = router;