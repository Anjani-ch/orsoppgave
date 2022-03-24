const mongoose = require('mongoose');

const { userObj } = require('./User.js');

const adminObj = {
    ...userObj,
    isAdmin: {
        type: Boolean,
        default: true
    }
};

const adminSchema = new mongoose.Schema(adminObj);

const Admin = mongoose.model('Admin', adminSchema);

module.exports = { Admin, adminObj };