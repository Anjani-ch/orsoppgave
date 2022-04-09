const dotenv = require('dotenv');
const yargs = require('yargs');
const emailValidator = require('email-validator');

const connectToDB = require('./db.js');

const { createSuperAdmin } = require('../controllers/superAdminController.js');

const { User } = require('../models/User.js');
const { Admin } = require('../models/Admin.js');
const { SuperAdmin } = require('../models/SuperAdmin.js');

const args = yargs.argv;

dotenv.config();

(async _ => {
    const argErrors = [];
    const requiredArgs = [
        'username',
        'email',
        'password',
        'wantsEmailNotifications',
        'wantsPushNotifications'
    ];

    requiredArgs.forEach(arg => {
        const isInvalidArg = typeof args[arg] == 'null' || typeof args[arg] == 'undefined' || args[arg] == 'null' || args[arg] == 'undefined';

        if(isInvalidArg) {
            argErrors.push(`MISSING ARGUMENT: ${arg}`);
        }
    });

    if(!argErrors.length) {
        try {
            const {
                username,
                email,
                password,
                wantsEmailNotifications,
                wantsPushNotifications
            } = args;

            const userData = {
                username,
                email,
                password,
                wantsEmailNotifications: typeof wantsEmailNotifications != null && typeof wantsEmailNotifications != undefined && wantsEmailNotifications != 'true' ? true : false,
                wantsPushNotifications: typeof wantsPushNotifications != null && typeof wantsPushNotifications != undefined && wantsPushNotifications != 'true' ? true : false
            };
    +
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
                console.log(`ERROR${errors.length > 1 ? 'S' : ''} CREATING USER:`);
                errors.forEach(err => {
                    console.log('-------------------------');
                    console.log(err);
                    console.log('-------------------------');
                });
            }
    
            process.exit(0);
        } catch (err) {
            console.log(err);
            process.exit(1);
        }
    } else {
        console.log(`ARGUMENT ERROR${argErrors.length > 1 ? 'S': ''}:`);
        argErrors.forEach(err => {
            console.log('-------------------------');
            console.log(err);
            console.log('-------------------------');
        });
    }
})();