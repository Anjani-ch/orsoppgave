const express = require('express');

const { handleLogin, handleSignup, handleLogout } = require('../controllers/authController.js');
const { deleteUser, getUser, updateUser } = require('../controllers/userController.js');
const { createAdmin, deleteAdmin, getAdmin, updateAdmin } = require('../controllers/adminController.js');
const { deleteSuperAdmin, updateSuperAdmin } = require('../controllers/superAdminController.js');

const { isAdmin, isLoggedOut, isLoggedIn } = require('../middleware/authMiddleware.js');

const router = express.Router();

// User Signup Route
router.post('/signup', isLoggedOut, (req, res) => handleSignup(req, res));

// User Login Route
router.post('/login', isLoggedOut, (req, res, next) => handleLogin(req, res, next));

// User Logout Route
router.post('/logout', isLoggedIn, (req, res) => handleLogout(req, res));

// User Delete Routes
router.delete('/delete', isLoggedIn, async (req, res) => {
    const { isAdmin, isSuperAdmin } = req.user;

    const callback = _ => {
        req.flash('successMsg', 'Account deleted');
        res.status(204).json({ redirect: '/signup' });
    };

    if(isSuperAdmin) {
        try {
            await deleteSuperAdmin(req, res);
            callback();
        } catch (err) {
            console.log(err);
        }
    } else if(isAdmin) {
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

// User Update Route
router.patch('/update', async (req, res) => {
    const { isAdmin, isSuperAdmin } = req.user;

    if(isSuperAdmin) {
        try {
            await updateSuperAdmin(req, res, req.body);
            res.redirect('/settings');
        } catch (err) {
            console.log(err);
        }
    } else if(isAdmin) {
        try {
            await updateAdmin(req, res, req.body);
            res.redirect('/settings');
        } catch (err) {
            console.log(err);
        }
    } else {
        try {
            await updateUser(req, res, req.body);
            res.redirect('/settings');
        } catch (err) {
            console.log(err);
        }
    }
});

router.delete('/delete/:id', isAdmin, async (req, res) => {
    const id = req.params.id;

    try {
        await deleteUser(req, res, id);

        res.status(204).json({ redirect: '/admin/dashboard' });
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
        
        res.status(202).json({ redirect: '/admin/dashboard', user: await getAdmin(createdAdmin.id) });
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;