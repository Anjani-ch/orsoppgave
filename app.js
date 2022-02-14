// Init Environment Variables
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// Init App
const app = express();

const PORT = process.env.PORT || 3000;

// Connect To DB
try {
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, });
    console.log('DB Connected...');
} catch(err) {
    console.log(err);
}

// Set EJS Engine
app.set('view engine', 'ejs');

// Middleware For Parsing Requests
app.use(express.urlencoded({ extended: false }));

// Set Public Folder
app.use(express.static(path.join(__dirname, '/public')));

// Use Routes
app.use('/', require('./router/routes.js'));

// Start Server
app.listen(PORT, _ => console.log(`Server running on port ${PORT}`));