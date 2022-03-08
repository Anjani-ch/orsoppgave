const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    wantsEmailNotifications: {
        type: Boolean,
        required: true,
    },
    wantsPushNotifications: {
        type: Boolean,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: true
    }
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;