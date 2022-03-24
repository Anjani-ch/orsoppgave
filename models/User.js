const mongoose = require('mongoose');

const userObj = {
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
    theme: {
        type: String,
        default: 'light'
    }
};

const userSchema = new mongoose.Schema(userObj);

const User = mongoose.model('User', userSchema);

module.exports = { User, userObj };