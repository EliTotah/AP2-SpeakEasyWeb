const chatController = require('../controllers/chat');

const express = require('express');
var router = express.Router();

router.route('/')
    .get(chatController.getChats)
    .post(chatController.createChat)

router.route('/id')
    .get(chatController.getChat)
    .delete(chatController.deleteChat);

router.route('/id/Messages')
    .get(chatController.getChat)
    .post(chatController.deleteChat);

module.exports = router;