// .env Config
require('dotenv').config();

const express = require('express');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const path = require('path');

const initPassport = require('./config/passport.js');
const connectToDB = require('./config/db.js');

const PORT = process.env.PORT || 3000;

const io = require('socket.io')(5000, {
    cors: [`http://localhost:${PORT}`]
});

io.on('connection', socket => {
    console.log(socket.id)
});

// Init Express App
const app = express();

io.on('connection', socket => {
    console.log(socket.id)
});

// Passport Config
initPassport(passport);

// Connect To DB
connectToDB(process.env.MONGO_URI)
    .then(_ => app.listen(PORT, _ => console.log(`Server running on port ${PORT}`)))
    .catch(err => console.log(err));

// Set EJS Engine
app.set('view engine', 'ejs');

// Set Public Folder
app.use(express.static(path.join(__dirname, '/public')));

// Bodyparser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
    // Flash Messages
    res.locals.successMsg = req.flash('successMsg');
    res.locals.errorMsg = req.flash('errorMsg');
    res.locals.error = req.flash('error');

    // User
    res.locals.user = req.user;
    
    next();
});

// Routes
app.use('/', require('./routes/routes.js'));