const express = require('express');

const { createNotification, deleteNotification } = require('../controllers/notificationController.js');

const { isLoggedIn } = require('../middleware/authMiddleware.js');

const router = express.Router();

router.post('/create', isLoggedIn, async (req, res) => {
    try {
        const result = await createNotification(req, res, req.body);

        res.json({ msg: 'Notification created', result  });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Error creating notification' });
    }
});

router.delete('/:id', isLoggedIn, async (req, res) => {
    try {
        await deleteNotification(req.params.id);

        res.json({ msg: 'Notification deleted' });
    } catch (err) {
        console.log(err);   
        res.status(500).json({ msg: 'Error deleting notification' });
    }
});

module.exports = router;