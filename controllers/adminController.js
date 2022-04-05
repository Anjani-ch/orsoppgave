const { logCreatedUser, logDeletedUser } = require('../controllers/logController.js');
const { hashPassword } = require('../controllers/bcryptController.js');

const { Admin } = require('../models/Admin.js');

const createAdmin = async (req, res, userData, isPromotion) => {
    const user = new Admin(userData);

    if (!isPromotion) {
        try {
            user.password = await hashPassword(user.assword, 10);
    
            await user.save();
    
            if (callback) callback();
    
            logCreatedUser(user);
        } catch (err) {
            console.log(err);
            res.status(500).json({ msg: 'Error creating admin' });
        }
    } else {
        try {
            await user.save();

            return user;
        } catch (err) {
            console.log(err);
            res.status(500).json({ msg: 'Error creating admin' });
        }
    }
};

const deleteAdmin = async (req, res, id) => {
    try {
        const userID = id ? id : req.user.id;

        await Admin.deleteOne({ _id: userID });

        logDeletedUser(req.user);
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Error deleting admin' });
    }
};

const updateAdmin = async (req, res, body) => {
    try {
        await Admin.updateOne({ _id: req.user.id }, body);
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Error updating admin' });
    }
};

const getAdmin = async id => {    
    try {
        const user = await Admin.findById(id);
        
        return user;
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Error getting admin' });
    }
}

const getAllAdmins = async _ => {
    try {
        const results = await Admin.find();

        return results;
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Error getting admins' });
    }
};

module.exports = { createAdmin, deleteAdmin, updateAdmin, getAdmin, getAllAdmins };