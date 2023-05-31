const messageService = require('../services/message');

const createMessage = async (req, res) => {
    res.json(await messageService.createMessage(req.param.id, req.body.msg));
};

const getMessages = async (req, res) => {
    res.json(await messageService.getMessages(req.param.id));
};

module.exports = {createMessage, getMessages};