const express = require('express');

const { createNotification, deleteNotification } = require('../controllers/notificationController.js');

const router = express.Router();

router.post('/create', async (req, res) => {
    try {        
        await createNotification(req, res, req.body);

        res.json({ msg: 'Notification created' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Error creating notification' });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await deleteNotification(req, res, id);

        res.json({ msg: 'Notification deleted' });
    } catch (err) {
        console.log(err);   
        res.status(500).json({ msg: 'Error deleting notification' });
    }
});

module.exports = router;