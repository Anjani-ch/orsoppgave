const express = require('express');

const { isAdmin } = require('../middleware/auth.js');

const { renderAdminDashboard } = require('../controllers/viewController.js');

const router = express.Router();

// Dashboard Route
router.get('/dashboard', isAdmin, (req, res) => renderAdminDashboard(req, res));

module.exports = router;