const mongoose = require('mongoose');

const { adminObj } = require('./Admin.js');

const superAdminObj = {
    ...adminObj,
    isSuperAdmin: {
        type: Boolean,
        default: true
    }
};

const superAdminSchema = new mongoose.Schema(superAdminObj);

const SuperAdmin = mongoose.model('SuperAdmin', superAdminSchema);

module.exports = { SuperAdmin, superAdminObj };