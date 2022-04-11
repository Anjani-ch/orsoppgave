const express = require('express');

const { createEmail, deleteEmail } = require('../controllers/emailController.js');
const { subcribeForEmails, unsubcribeForEmails } = require('../controllers/mailchimpController.js');

const { isLoggedIn } = require('../middleware/authMiddleware.js');

const router = express.Router();

router.post('/create', isLoggedIn, async (req, res) => {
    try {        
        const result = await createEmail(req, res, req.body);
        console.log(result)
        res.json({ msg: 'Email created', result  });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Error creating email' });
    }
});

router.post('/subscribe', isLoggedIn, async (req, res) => {
    try {
        await subcribeForEmails(req.user);

        res.json({ msg: 'Subscribed to email notifications' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Error subscribing to email notifications' });
    }
});

router.post('/unsubscribe', isLoggedIn, async (req, res) => {
    try {
        await unsubcribeForEmails(req.user);

        res.json({ msg: 'Unsubscribed to email notifications' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Error unsubscribing to email notifications' });
    }
});

router.delete('/:id', isLoggedIn, async (req, res) => {
    try {
        await deleteEmail(req.params.id);

        res.json({ msg: 'Email deleted' });
    } catch (err) {
        console.log(err);   
        res.status(500).json({ msg: 'Error deleting email' });
    }
});

module.exports = router;