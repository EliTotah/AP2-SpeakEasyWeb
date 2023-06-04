const messageService = require('../services/message');
const userService = require('../services/user');
const Message = require('../models/message');

const createMessage = async (req, res) => {
    try {
        if (req.headers.authorization) {
            // Extract the username from that header
            const token = req.headers.authorization.split(" ")[1];
            const result = await userService.getUserByToken(token);
            if (!result) {
                return res.status(404).json("user not  found");
            } else {
                const { id } = req.params;
                const msg = req.body.msg;
                const message = await messageService.createMessage(id, result.username, msg);
                return res.status(200).json(message);
            }
        }
    } catch (error) {
        if (error.message === "user not  found" || error.message === "invalid token")
            throw error;
        else
            throw new Error('Internal Server Error');
    }
};

const getMessages = async (req, res) => {
    try {
        if (req.headers.authorization) {
            // Extract the username from that header
            const token = req.headers.authorization.split(" ")[1];
            const result = await userService.getUserByToken(token);
            if (!result) {
                return res.status(404).json("no user Found");
            }
            else {
                const { id } = req.params;
                const x = await messageService.getMessages(id);
                return res.json(await messageService.getMessages(id));
            }
        }
    } catch (error) {
        if (error.message === "no user Found" || error.message === "invalid token")
            throw error;
        else
            throw new Error('Internal Server Error');
    }
};

module.exports = { createMessage, getMessages };