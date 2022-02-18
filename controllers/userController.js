const bcrypt = require('bcrypt');

const { logCreatedUser, logDeletedUser } = require('../controllers/logController.js');

const User = require('../models/User.js');

const createUser = (req, res, userData) => {
    const user = new User({ ...userData });

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

const deleteUser = (req, res) => {
    const { _id } = req.user;

    User.deleteOne({ _id })
        .then(({ deletedCount }) => {
            logDeletedUser(req.user);
            req.flash('successMsg', 'Account deleted');
            res.redirect('/signup');
        });
};

module.exports = { createUser, deleteUser };