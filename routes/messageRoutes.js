const express = require('express');
const router = express.Router();
const messageService = require('../services/messageService');

router.get('/', async (req, res) => {
    const messages = await messageService.getMessages();
    res.json(messages);
});

router.post('/', async (req, res) => {
    const message = await messageService.createMessage(req.body);
    res.json(message);
});

module.exports = router;
