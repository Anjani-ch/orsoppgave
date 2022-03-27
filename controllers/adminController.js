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
        }
    } else {
        try {
            await user.save();

            return user;
        } catch (err) {
            console.log(err);
        }
    }
};

const deleteAdmin = async (req, res, id) => {
    const userID = id ? id : req.user.id;

    try {
        await Admin.deleteOne({ _id: userID });

        logDeletedUser(req.user);
    } catch (err) {
        console.log(err);
    }
};

const getAdmin = async id => {    
    try {
        const user = await Admin.findById(id);
        
        return user;
    } catch (err) {
        console.log(err);
    }
}

const getAllAdmins = async _ => {
    try {
        const results = await Admin.find();

        return results;
    } catch (err) {
        console.log(err);
    }
};

module.exports = { createAdmin, deleteAdmin, getAdmin, getAllAdmins };