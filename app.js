const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const path = require('path');

const initPassport = require('./config/passport.js');

// Init App
const app = express();

const PORT = process.env.PORT || 3000;

// .env Config
dotenv.config();

// Passport Config
initPassport(passport);

// Connect To DB
try {
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, });
    console.log('DB Connected...');
} catch(err) {
    console.log(err);
}

// Set EJS Engine
app.set('view engine', 'ejs');

// Set Public Folder
app.use(express.static(path.join(__dirname, '/public')));

// Bodyparser
app.use(express.urlencoded({ extended: false }));

// Express Session
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));

// Passport 
app.use(passport.initialize());
app.use(passport.session());

// Connect Flash
app.use(flash());

// Global Variables
app.use((req, res, next) => {
    res.locals.successMsg = req.flash('successMsg');
    res.locals.errorMsg = req.flash('errorMsg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user;
    next();
});

// Routes
app.use('/', require('./router/routes.js'));

// Start Server
app.listen(PORT, _ => console.log(`Server running on port ${PORT}`));