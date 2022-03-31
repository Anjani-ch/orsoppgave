const { logCreatedUser, logDeletedUser } = require('./logController.js');
const { hashPassword } = require('../controllers/bcryptController.js');

const { User } = require('../models/User.js');

const createUser = async (req, res, userData) => {
    const user = new User(userData);

    try {
        user.password = await hashPassword(user.password, 10);

        await user.save();

        logCreatedUser(user);

        req.flash('successMsg', 'You are now registered');
        res.status(201).redirect('/login');
    } catch (err) {
        console.log(err);
    }
};

const deleteUser = async (req, res, id) => {
    try {
        const userID = id ? id : req.user.id;

        await User.deleteOne({ _id: userID });

        logDeletedUser(req.user);
    } catch (err) {
        console.log(err);
    }
};

const updateUser = async (req, res, body) => {
    try {
        await User.updateOne({ _id: req.user.id }, body);
    } catch (err) {
        console.log(err);
    }
};

const getUser = async id => {    
    try {
        const user = await User.findById(id);
        
        return user;
    } catch (err) {
        console.log(err);
    }
}

const getAllUsers = async _ => {
    try {
        const results = await User.find();

        return results;
    } catch (err) {
        console.log(err);
    }
};

module.exports = { createUser, deleteUser, updateUser, getUser, getAllUsers };