const dotenv = require('dotenv');
const emailValidator = require('email-validator');
const path = require('path');

const connectToDB = require('./db.js');

const { createSuperAdmin } = require('../controllers/superAdminController.js');

const { User } = require('../models/User.js');
const { Admin } = require('../models/Admin.js');
const { SuperAdmin } = require('../models/SuperAdmin.js');

dotenv.config({ path: path.resolve('../', '.env') });

(async _ => {
    try {
        const userData = {
            username: 'superAdmin2',
            email: 'superAdmin2@superAdmin.com',
            password: '1234567',
            wantsEmailNotifications: false,
            wantsPushNotifications: true
        };

        await connectToDB(process.env.MONGO_URI);

        const userWithEmail = await User.findOne({ email: userData.email });
        const adminWithEmail = await Admin.findOne({ email: userData.email });
        const superAdminWithEmail = await SuperAdmin.findOne({ email: userData.email });

        const userWithUsername = await User.findOne({ username: userData.username });
        const adminWithUsername = await Admin.findOne({ username: userData.username });
        const superAdminWithUsername = await SuperAdmin.findOne({ username: userData.username });

        const isDuplicateEmail = userWithEmail || adminWithEmail || superAdminWithEmail;
        const isDuplicateUsername = userWithUsername || adminWithUsername || superAdminWithUsername;

        const errors = [];
        const passwordMinChars = 6;

        if (isDuplicateEmail) errors.push('Email already in use');

        if (isDuplicateUsername) errors.push('Username already in use');

        if (!userData.username || !userData.email || !userData.password) errors.push('Please fill all fields');
    
        if (!emailValidator.validate(userData.email)) errors.push('Invalid email');
    
        if (userData.password.length < passwordMinChars) errors.push(`Password must be minimum ${passwordMinChars} characters long`);

        if (!errors.length) {
            await createSuperAdmin(userData);
            console.log('USER CREATED');
        } else {
            console.log('ERROR CREATING USER:');
            console.log(errors);
        }

        process.exit(0);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
})();