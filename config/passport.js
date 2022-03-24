const LocalStrategy = require('passport-local').Strategy;

const { comparePasswords } = require('../controllers/bcryptController.js');

const { User } = require('../models/User.js');
const { Admin } = require('../models/Admin.js');
const { SuperAdmin } = require('../models/SuperAdmin.js');

const initPassport = passport => {
    passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
        // Get User With Email
        try {
            const checkUsers = User.findOne({ email });
            const checkAdmins = Admin.findOne({ email });
            const checkSuperAdmins = SuperAdmin.findOne({ email });

            const promises = [checkUsers, checkAdmins, checkSuperAdmins];

            let users = await Promise.all(promises);
            users = users.filter(user => user);

            const user = users.find(user => user.email === email);

            if (user) {
                // Match Passwords
                const isMatch = await comparePasswords(password, user.password);

                let result;

                if (isMatch) result = done(null, user);
                else result = done(null, false, { message: 'Incorrect password' });

                return result;
            } else {
                return done(null, false, { message: 'No user with these credentials' });
            }
        } catch (err) {
            console.log(err);
        }
    }));

    passport.serializeUser((user, done) => done(null, user.id));
    
    passport.deserializeUser(async (id, done) => {
        try {
            const userInDB = await User.findById(id);
            const adminInDB = await Admin.findById(id);
            const superAdminInDB = await SuperAdmin.findById(id);

            const user = userInDB || adminInDB || superAdminInDB;

            done(null, user);
        } catch (err) {
            console.log(err);
            done(err, null);
        }
    });
}

module.exports = initPassport;