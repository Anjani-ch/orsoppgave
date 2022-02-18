const express = require('express');

const { isLoggedIn, isLoggedOut } = require('../middleware/auth.js');

const { handleLogin, handleSignup, handleLogout, handleAccountDelete } = require('../controllers/authController.js');
const {
    renderIndex,
    renderJobExperience,
    renderEducation,
    renderProjects,
    renderProfile,
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
router.post('/signup', handleSignup);

// Login Routes
router.get('/login', isLoggedOut, renderLogin);
router.post('/login', handleLogin);

// Logout Route
router.post('/logout', handleLogout);

// Account Delete Route
router.post('/user/delete', handleAccountDelete);

// Download Routes
router.get('/download/resume', isLoggedIn, (req, res) => res.download('src/docs/cv.pdf'));

// 404 Route
router.use(render404);

module.exports = router;