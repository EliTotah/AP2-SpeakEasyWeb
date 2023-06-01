const chatService = require('../services/chat');
const userService = require('../services/user');
const User = require('../models/user');


const createChat = async (req, res) => {
    if (req.headers.authorization) {
        // Extract the username from that header
            const token = req.headers.authorization.split(" ")[1];
            const result = await userService.getUserByName(token);
            const user2 = await User.findOne({username:req.body.username});
            if (!result || !user2) {
                return res.status(404).json("no user Found");
            } else {
                const newChat1 = await chatService.createChat(result.username);
                const x1 = {id: newChat1.id, user:{
                                            username: newChat1.user.username, 
                                            displayName: newChat1.user.displayName, 
                                            profilePic: newChat1.user.profilePic}
                };
                const newChat2 = await chatService.createChat(user2.username);
                const x2 = {id: newChat2.id, user:{
                                            username: newChat2.user.username, 
                                            displayName: newChat2.user.displayName, 
                                            profilePic: newChat2.user.profilePic}
                };
                return res.json(x2);
            }
        } else{
        }
};

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