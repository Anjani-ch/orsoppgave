const { Message } = require('../models/Message.js');

const createMessage = async (req, res, messageData) => {
    try {
        const msg = new Message({ ...messageData, senderID: req.user.id });

        await msg.save();
    } catch(err) {
        console.log(err);
    }
};

const getSendtMessages = async (req, res, id) => {
    try {
        const messages = await Message.find({ senderID: id });

        res.status(200).json({ messages });
    } catch (err) {
        console.log(err);
    }
};

const getReceivedMessages = async (req, res, id) => {
    try {
        const messages = await Message.find({ receiverID: id });

        res.status(200).json({ messages });
    } catch (err) {
        console.log(err);
    }
};

module.exports = { createMessage, getSendtMessages, getReceivedMessages };