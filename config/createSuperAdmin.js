const { createSuperAdmin } = require('../controllers/superAdminController.js');

const { User } = require('../models/User.js');
const { Admin } = require('../models/Admin.js');
const { SuperAdmin } = require('../models/SuperAdmin.js');

(async _ => {
    try {
        const userData = {
            username: 'user',
            email: 'user@user.com',
            password: '12345',
            wantsEmailNotifications: null,
            wantsPushNotifications: null
        };

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

        if (!username || !email || !password || !confirmPassword) errors.push('Please fill all fields');
    
        if (!emailValidator.validate(email)) errors.push('Invalid email');
    
        if (password.length < passwordMinChars) errors.push(`Password must be minimum ${passwordMinChars} characters long`);

        if (!errors.length) createSuperAdmin(userData);
        else console.log(errors)
    } catch (err) {
        console.log(err);
    }
})();