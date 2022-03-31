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
    senderEmail: {
        type: String,
        required: true
    },
    receiverEmail: {
        type: String,
        required: true
    }
};

const messageSchema = new mongoose.Schema(messageObj);

const Message = mongoose.model('Message', messageSchema);

module.exports = { Message, messageObj };