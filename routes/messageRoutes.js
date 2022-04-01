const express = require('express');

const { isLoggedIn } = require('../middleware/authMiddleware.js');

const { createMessage, getSendtMessages, getReceivedMessages } = require('../controllers/messageController.js');

const router = express.Router();

router.get('/sendt/:userEmail', isLoggedIn, (req, res) => getSendtMessages(req, res, req.params.userEmail));

router.get('/received/:userEmail', isLoggedIn, (req, res) => getReceivedMessages(req, res, req.params.userEmail));

router.post('/create', isLoggedIn, (req, res) => createMessage(req, res));

module.exports = router;