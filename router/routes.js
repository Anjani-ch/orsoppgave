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
router.get('/job-experience', isLoggedIn, renderJobExperience);

// Education Routes
router.get('/education', isLoggedIn, renderEducation);

// Projects Route
router.get('/projects', isLoggedIn, renderProjects);

// Settings Route
router.get('/settings', isLoggedIn, renderSettings);

// Inbox Routes
router.get('/inbox', isLoggedIn, renderInbox);

// Signup Routes
router.get('/signup', isLoggedOut, renderSignup);

// Login Routes
router.get('/login', isLoggedOut, renderLogin);

// Download Routes
router.get('/download/resume', isLoggedIn, (req, res) => res.download('src/docs/cv.pdf'));

// User Routes
router.use('/user', require('./userRoutes.js'));

// 404 Route
router.use(render404);

module.exports = router;