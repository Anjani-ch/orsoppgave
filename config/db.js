const mongoose = require('mongoose');

const connectToDB = async connectionURI => {
    try {
        mongoose.connect(connectionURI, { useNewUrlParser: true, useUnifiedTopology: true, });
    } catch (err) {
        console.log(err);
    }
};

module.exports = connectToDB;