const express = require('express');

const { createEmail, deleteEmail } = require('../controllers/emailController.js');

const router = express.Router();

router.post('/create', async (req, res) => {
    try {        
        const result = await createEmail(req, res, req.body);

        res.json({ msg: 'Email created', result  });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'Error creating email' });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await deleteEmail(req, res, id);

        res.json({ msg: 'Email deleted' });
    } catch (err) {
        console.log(err);   
        res.status(500).json({ msg: 'Error deleting email' });
    }
});

module.exports = router;