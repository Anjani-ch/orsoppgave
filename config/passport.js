const LocalStrategy = require('passport-local').Strategy;
// const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');

const User = require('../models/User.js');
const Admin = require('../models/Admin.js');

const initPassport = passport => {
    passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
        // Get User With Email
        User.findOne({ email })
            .then(user => {
                if (!user) {
                    Admin.findOne({ email })
                        .then(user => {
                            if (!user) {
                                fs.readFile(path.join(process.cwd(), 'config', 'superAdmins.json'), 'utf-8', (err, data) => {
                                    const superAdmins = JSON.parse(data);
                                    const superAdmin = superAdmins.find(superAdmin => superAdmin.email === email);

                                    let result;

                                    if (err) throw err;

                                    // if (!superAdmin) {
                                    //     result = done(null, false, { message: 'That email is not registered' });
                                    // } else {
                                    //     if (superAdmin.password === password) result = done(null, false, { message: 'Incorrect password' });
                                    //     else result = done(null, superAdmin);
                                    // }

                                    if (!superAdmin) result = done(null, false, { message: 'That email is not registered' });
                                    else if (superAdmin.password === password) result = done(null, false, { message: 'Incorrect password' });
                                    else result = done(null, superAdmin);

                                    return result;
                                });
                            } else {
                                // Match Passwords
                                bcrypt.compare(password, user.password, (err, isMatched) => {
                                    let result;

                                    if (err) throw err;

                                    if (isMatched) result = done(null, user);
                                    else result = done(null, false, { message: 'Incorrect password' });

                                    return result;
                                });
                            }
                        })
                        .catch(err => console.log(err));
                } else {
                    // Match Passwords
                    bcrypt.compare(password, user.password, (err, isMatched) => {
                        let result;

                        if (err) throw err;

                        if (isMatched) result = done(null, user);
                        else result = done(null, false, { message: 'Incorrect password' });

                        return result;
                    });
                }
            })
            .catch(err => console.log(err));
    }));

    passport.serializeUser((user, done) => done(null, user._id));
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            if (user) {
                done(err, user);
            } else {
                Admin.findById(id, (err, user) => {
                    if (user) {
                        done(err, user);
                    } else {
                        fs.readFile(path.join(process.cwd(), 'config', 'superAdmins.json', 'utf-8'), (err, data) => {
                            const superAdmins = JSON.parse(data);
                            const superAdmin = superAdmins.find(superAdmin => superAdmin.id === user.id);

                            if (err) throw err;
                            if (superAdmin) done(err, superAdmin);
                        })
                    }
                });
            }
        })
    });
}

module.exports = initPassport;