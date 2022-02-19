const express = require('express');

const { isLoggedIn, isLoggedOut } = require('../middleware/auth.js');

const {
    renderIndex,
    renderJobExperience,
    renderEducation,
    renderProjects,
    renderSettings,
    renderInbox,
    renderSignup,
    renderLogin,
    render404
} = require('../controllers/viewController.js');

const router = express.Router();

// Index Route
router.get('/', renderIndex);

// Job Experience Route
router.get('/job-experience', isLoggedIn, (req, res) => renderJobExperience(req, res));

// Education Routes
router.get('/education', isLoggedIn, (req, res) => renderEducation(req, res));

// Projects Route
router.get('/projects', isLoggedIn, (req, res) => renderProjects(req, res));

// Settings Route
router.get('/settings', isLoggedIn, (req, res) => renderSettings(req, res));

// Inbox Routes
router.get('/inbox', isLoggedIn, (req, res) => renderInbox(req, res));

// Signup Routes
router.get('/signup', isLoggedOut, (req, res) => renderSignup(req, res));

// Login Routes
router.get('/login', isLoggedOut, (req, res) => renderLogin(req, res));

// Download Routes
router.get('/download/resume', isLoggedIn, (req, res) => res.download('src/docs/cv.pdf'));

// User Routes
router.use('/user', require('./userRoutes.js'));

// 404 Route
router.use((req, res) => render404(req, res));

module.exports = router;