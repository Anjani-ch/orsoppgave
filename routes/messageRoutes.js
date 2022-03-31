const express = require('express');

const { isLoggedIn } = require('../middleware/authMiddleware.js');

const {
    createMessage,
    getSendtMessages,
    getReceivedMessages
} = require('../controllers/messageController.js');

const router = express.Router();

router.get('/sendt', isLoggedIn, (req, res) => getSendtMessages(req, res, req.user.id));

router.get('/received', isLoggedIn, (req, res) => getReceivedMessages(req, res, req.user.id));

router.post('/create', isLoggedIn, (req, res) => createMessage(req, res, req.body));

module.exports = router;