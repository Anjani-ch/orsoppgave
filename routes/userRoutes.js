const express = require('express');

const { handleLogin, handleSignup, handleLogout } = require('../controllers/authController.js');
const { deleteUser, getUser, updateUser, getAllUsers } = require('../controllers/userController.js');
const { createAdmin, deleteAdmin, getAdmin, updateAdmin, getAllAdmins } = require('../controllers/adminController.js');
const { deleteSuperAdmin, updateSuperAdmin, getAllSuperAdmins } = require('../controllers/superAdminController.js');

const { isAdmin, isLoggedOut, isLoggedIn } = require('../middleware/authMiddleware.js');

const router = express.Router();

// User Get Searched Route
router.get('/', async (req, res) => {
    try {
        const users = await getAllUsers();
        const admins = await getAllAdmins();
        const superAdmins = await getAllSuperAdmins();

        let results = [...users, ...admins, ...superAdmins];

        results = results.map(user => user.email);
        results = results.filter(user => user.includes(req.query.email));

        res.status(200).json({ results });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: `No user emails including ${req.query.email}` });
    }
});

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
            res.status(500).json({ msg: 'Error deleting account' });
        }
    } else if(isAdmin) {
        try {
            await deleteAdmin(req, res);
            callback();
        } catch (err) {
            console.log(err);
            res.status(500).json({ msg: 'Error deleting account' });
        }
    } else {
        try {
            await deleteUser(req, res);
            callback();
        } catch (err) {
            console.log(err);
            res.status(500).json({ msg: 'Error deleting account' });
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
            res.status(500).json({ msg: 'Error updating user' });
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
        res.status(500).json({ msg: 'Error deleting user' });
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
        res.status(500).json({ msg: 'Error promoting user' });
    }
});

module.exports = router;