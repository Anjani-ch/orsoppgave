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
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    receiverID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
};

const messageSchema = new mongoose.Schema(messageObj);

const Message = mongoose.model('Message', messageSchema);

module.exports = { Message, messageObj };