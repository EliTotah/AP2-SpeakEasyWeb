const messageService = require('../services/message');
const userService = require('../services/user');
const Message = require('../models/message');

const createMessage = async (req, res) => {
    if (req.headers.authorization) {
        // Extract the username from that header
        const token = req.headers.authorization.split(" ")[1];
        const result = await userService.getUserByToken(token);
        if (!result) {
            return res.status(404).json("no user Found");
        } else {
            const message = await messageService.createMessage(req.param.id, result.username, req.body.msg);
            console.log(message);
            return res.json(message);
        }
    }
    else {
    }
};

const getMessages = async (req, res) => {
    if (req.headers.authorization) {
        // Extract the username from that header
        const token = req.headers.authorization.split(" ")[1];
        const result = await userService.getUserByToken(token);
        if (!result) {
            return res.status(404).json("no user Found");
        }
        else{
            res.json(await messageService.getMessages(req.param.id));
        }
    }
};

module.exports = { createMessage, getMessages };