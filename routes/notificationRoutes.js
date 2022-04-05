const express = require('express');

const { createNotification, deleteNotification } = require('../controllers/notificationController.js');

const router = express.Router();

router.post('/create', async (req, res) => {
    try {        
        await createNotification(req, res, req.body);
    } catch (err) {
        console.log(err);
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await deleteNotification(req, res, id);
    } catch (err) {
        console.log(err);   
    }
});

module.exports = router;