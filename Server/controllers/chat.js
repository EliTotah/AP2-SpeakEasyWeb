const chatService = require('../services/chat');
const userService = require('../services/user');
const User = require('../models/user');


const createChat = async (req, res) => {
    if (req.headers.authorization) {
        // Extract the username from that header
            const token = req.headers.authorization.split(" ")[1];
            const result = await userService.getUserByName(token);
            if (!result) {
                return res.status(404).json("no user Found");
            } else {
                const newChat = await chatService.createChat(result.username, req.body.username);
                return res.json(newChat);
            }
        } else{
            }
};

// const createChat = async (req, res) => {
//     try {
//         const { username } = req.body;
//         if (req.headers.authorization) {
//             const tokenObject = JSON.parse(
//                 req.headers.authorization.split(" ")[1]
//             );
//             const token = tokenObject.token;
//             const result = await chatService.createChat(username, token);
//             res.status(200).json(result);
//         }
//     } catch (error) {
//         if (error.message === "Invalid token") {
//             return res.status(401).json({ errors: ["Invalid token"] });
//         } else if (error.message === "Contact not found") {
//             return res.status(404).json({ errors: ["Contact not found"] });
//         } else {
//             res.status(500).json({
//                 errors: ["An error occurred during chat creation"],
//             });
//         }
//     }
// };



const getChats = async (req, res) => {
    if (req.headers.authorization) {
        // Extract the token from that header
        const token = req.headers.authorization.split(" ")[1];
        const result = await chatService.getChats(token);
        return res.json(result);
}
};

const getChat = async (req, res) => {
    const chat = await chatService.getChatById(req.params.id);
    if (!chat) {
        return res.status(404).json({ errors: ['Chat not found'] });
    }
    res.json(article);
};

const deleteChat = async (req, res) => {
    const chat = await chatService.getChatById(req.params.id);
    if (!chat) {
        return res.status(404).json({ errors: ['Chat not found'] });
    }
}; 

module.exports = {createChat, getChats, getChat, deleteChat};