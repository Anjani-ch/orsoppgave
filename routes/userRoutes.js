const express = require('express');

const { handleLogin, handleSignup, handleLogout } = require('../controllers/authController.js');
const { deleteUser, getUser } = require('../controllers/userController.js');
const { createAdmin, deleteAdmin, getAdmin } = require('../controllers/adminController.js');
const { deleteSuperAdmin } = require('../controllers/superAdminController.js');

const { isAdmin } = require('../middleware/auth.js');

const router = express.Router();

// User Signup Route
router.post('/signup', (req, res) => handleSignup(req, res));

// User Login Route
router.post('/login', (req, res, next) => handleLogin(req, res, next));

// User Logout Route
router.post('/logout', (req, res) => handleLogout(req, res));

// User Delete Routes
router.delete('/delete', async (req, res) => {
    const { isAdmin, isSuperAdmin } = req.user;

    const callback = _ => {
        req.flash('successMsg', 'Account deleted');
        res.json({ redirect: '/signup' });
    };

    if (isSuperAdmin) {
        try {
            await deleteSuperAdmin(req, res);
            callback();
        } catch (err) {
            console.log(err);
        }
    } else if (isAdmin) {
        try {
            await deleteAdmin(req, res);
            callback();
        } catch (err) {
            console.log(err);
        }
    } else {
        try {
            await deleteUser(req, res);
            callback();
        } catch (err) {
            console.log(err);
        }
    }
});

router.delete('/delete/:id', isAdmin, async (req, res) => {
    const id = req.params.id;

    try {
        await deleteUser(req, res, id);

        res.json({ redirect: '/admin/dashboard' })
    } catch (err) {
        console.log(err);   
    }
});

// User Promote Route
router.put('/promote/:id', isAdmin, async (req, res) => {
    const id = req.params.id;

    try {
        const {
            username,
            email,
            password,
            wantsEmailNotifications,
            wantsPushNotifications
        } = await getUser(id);

        const createdAdmin = await createAdmin(req, res, {
            username,
            email,
            password,
            wantsEmailNotifications,
            wantsPushNotifications
        }, true);

        await deleteUser(req, res, id);
        
        res.json({ redirect: '/admin/dashboard', user: await getAdmin(createdAdmin.id) })
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;