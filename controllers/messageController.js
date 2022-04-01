const { Message } = require('../models/Message.js');

const createMessage = async (req, res) => {
    const { receiver, subject, body } = req.body;

    const errors = [];

    if(!receiver || !subject || body) errors.push('Please fill in all fields');

    try {
        const msg = new Message({ ...req.body, senderEmail: req.user.email });

        await msg.save();

        res.redirect('/inbox');
    } catch(err) {
        console.log(err);
        res.status(500).json({ msg: 'Error creating message' });
    }
};

const getSendtMessages = async (req, res, email) => {
    try {
        const messages = await Message.find({ senderEmail: email });

        return messages;
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Error retreving messages' });
    }
};

const getReceivedMessages = async (req, res, email) => {
    try {
        const messages = await Message.find({ receiverEmail: email });

        return messages;
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Error retreving messages' });
    }
};

module.exports = { createMessage, getSendtMessages, getReceivedMessages };