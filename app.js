const express = require('express');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const dotenv = require('dotenv');
const path = require('path');

const initPassport = require('./config/passport.js');
const connectToDB = require('./config/db.js');

const { initSocketConnection } = require('./controllers/socketController.js');
const { checkNotificationDueTime, populateNotifications } = require('./controllers/notificationController.js');
const { checkEmailDueTime, populateEmails } = require('./controllers/emailController.js');

const PORT = process.env.PORT || 3000;

// Init Express App
const app = express();

// .env config
dotenv.config({ path: path.join(__dirname, '.env.local') });

populateNotifications();
populateEmails();

// Passport Config
initPassport(passport);

// Connect To DB
(async _ => {
    try {
        await connectToDB(process.env.MONGO_URI);
        console.log('Connected to DB...');
    
        initSocketConnection(PORT);
        app.listen(PORT, _ => {
            console.log(`Server running on port ${PORT}`);
            
            // Check for event due time
            setInterval(_ => {
                checkNotificationDueTime();
                checkEmailDueTime();
            }, 1000)
        });
    } catch (err) {
        console.log(err);
    }
})();

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