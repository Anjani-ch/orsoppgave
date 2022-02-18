const express = require('express');

const { handleLogin, handleSignup, handleLogout } = require('../controllers/authController.js');
const { deleteUser } = require('../controllers/userController.js');

const router = express.Router();

// User Signup Route
router.post('/signup', handleSignup);

// User Login Route
router.post('/login', handleLogin);

// User Logout Route
router.post('/logout', handleLogout);

// User Delete Route
router.post('/delete', deleteUser);

module.exports = router;