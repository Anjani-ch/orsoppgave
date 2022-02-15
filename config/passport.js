const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = require('../models/User.js');

const initPassport = passport => {
    passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
        // Get User With Email
        User.findOne({ email })
            .then(user => {
                if (!user) return done(null, false, { message: 'That email is not registered' });

                // Match Passwords
                bcrypt.compare(password, user.password, (err, isMatched) => {
                    let result;;

                    if (err) throw err;

                    if (isMatched) result = done(null, user);
                    else result = done(null, false, { message: 'Incorrect password' });

                    return result;
                });
            })
            .catch(err => console.log(err));
    }));

    passport.serializeUser((user, done) => done(null, user.id));
    passport.deserializeUser((id, done) => User.findById(id, (err, user) => done(err, user)));
}

module.exports = initPassport;