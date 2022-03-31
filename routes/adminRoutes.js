const express = require('express');

const { isAdmin } = require('../middleware/authMiddleware.js');

const { renderAdminDashboard } = require('../controllers/viewController.js');

const { deleteAdmin } = require('../controllers/adminController.js');

const { isSuperAdmin } = require('../middleware/authMiddleware.js');

const router = express.Router();

// Dashboard Route
router.get('/dashboard', isAdmin, (req, res) => renderAdminDashboard(req, res));

// Delete Admin Route
router.delete('/delete/:id', isSuperAdmin, async (req, res) => {
    const id = req.params.id;

    try {
        await deleteAdmin(req, res, id);

        res.status(204).json({ redirect: '/admin/dashboard' });
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;