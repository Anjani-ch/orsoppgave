const express = require('express');

const { handleLogin, handleSignup, handleLogout } = require('../controllers/authController.js');
const { deleteUser } = require('../controllers/userController.js');

const router = express.Router();

// User Signup Route
router.post('/signup', (req, res) => handleSignup(req, res));

// User Login Route
router.post('/login', (req, res, next) => handleLogin(req, res, next));

// User Logout Route
router.post('/logout', (req, res) => handleLogout(req, res));

// User Delete Route
router.delete('/delete', (req, res) => deleteUser(req, res));

module.exports = router;