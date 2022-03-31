const { Message } = require('../models/Message.js');

const createMessage = async (req, res, messageData) => {
    try {
        const msg = new Message({ ...messageData, senderEmail: req.user.email });

        await msg.save();
    } catch(err) {
        console.log(err);
    }
};

const getSendtMessages = async (req, res, email) => {
    try {
        const messages = await Message.find({ senderEmail: email });

        return messages;
    } catch (err) {
        console.log(err);
    }
};

const getReceivedMessages = async (req, res, email) => {
    try {
        const messages = await Message.find({ receiverEmail: email });

        return messages;
    } catch (err) {
        console.log(err);
    }
};

module.exports = { createMessage, getSendtMessages, getReceivedMessages };