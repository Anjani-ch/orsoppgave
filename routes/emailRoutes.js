const express = require('express');

const { createEmail, deleteEmail } = require('../controllers/emailController.js');

const router = express.Router();

router.post('/create', async (req, res) => {
    try {        
        await createEmail(req, res, req.body);
    } catch (err) {
        console.log(err);
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await deleteEmail(req, res, id);
    } catch (err) {
        console.log(err);   
    }
});

module.exports = router;