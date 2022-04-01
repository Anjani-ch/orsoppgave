const { logCreatedUser, logDeletedUser } = require('../controllers/logController.js');
const { hashPassword } = require('../controllers/bcryptController.js');

const { SuperAdmin } = require('../models/SuperAdmin.js');

const createSuperAdmin = async userData => {
    const user = new SuperAdmin(userData);

    try {
        user.password = await hashPassword(user.password, 10);

        await user.save();

        logCreatedUser(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Error creating super admin' });
    }
};

const deleteSuperAdmin = async (req, res, id) => {
    const userID = id ? id : req.user.id;

    try {
        await SuperAdmin.deleteOne({ _id: userID });

        logDeletedUser(req.user);
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Error deleting super admin' });
    }
};

const updateSuperAdmin = async (req, res, body) => {
    try {
        await SuperAdmin.updateOne({ _id: req.user.id }, body);
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Error updating super admin' });
    }
};

const getSuperAdmin = async id => {
    let result;
    
    try {
        const user = await SuperAdmin.findById(id);
        
        result = user;
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Error getting super admin' });
    }

    return result;
}

const getAllSuperAdmins = async _ => {
    try {
        const results = await SuperAdmin.find();

        return results;
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Error getting super admins' });
    }
};

module.exports = { createSuperAdmin, deleteSuperAdmin, updateSuperAdmin, getSuperAdmin, getAllSuperAdmins };