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
            const {id} = req.params;
            console.log(id);
            const msg = req.body.msg;
            console.log(msg);
            const message = await messageService.createMessage(id, result.username, msg);
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
            const {id} = req.params;
            console.log(id)
            const x = await messageService.getMessages(id);
            console.log(x);
            return res.json(await messageService.getMessages(id));
        }
    }
};

module.exports = { createMessage, getMessages };