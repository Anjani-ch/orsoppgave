const mongoose = require('mongoose');

const messageObj = {
    subject: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    senderID: {
        type: String,
        required: true
    },
    receiverID: {
        type: String,
        required: true
    }
};

const messageSchema = new mongoose.Schema(messageObj);

const Message = mongoose.model('User', messageSchema);

module.exports = { Message, messageObj };