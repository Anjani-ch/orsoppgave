const bcrypt = require('bcrypt');

const { logCreatedUser, logDeletedUser } = require('../controllers/logController.js');

const Admin = require('../models/Admin.js');

const createAdmin = (req, res, userData) => {
    const user = new Admin({ ...userData });

    bcrypt.genSalt(10, (err, salt) => {
        if (err) throw err;

        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) throw err;

            // Hash User Password
            user.password = hash;

            // Save User
            user.save(err => {
                if (err) throw err;

                logCreatedUser(user);
                req.flash('successMsg', 'You are now registered');
                res.redirect('/login');
            });
        });
    });
};

const deleteAdmin = (req, res) => {
    const { _id } = req.user;

    Admin.deleteOne({ _id })
        .then(({ deletedCount }) => {
            logDeletedUser(req.user);
            req.flash('successMsg', 'Account deleted');
            res.redirect('/signup');
        });
};

const getAllAdmins = async _ => {
    try {
        const res = await Admin.find({});
        return res;
    } catch (err) {
        console.log(err);
    }
};

module.exports = { createAdmin, deleteAdmin, getAllAdmins };