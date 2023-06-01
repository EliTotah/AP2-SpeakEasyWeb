const chatService = require('../services/chat');
const userService = require('../services/user');


const createChat = async (req, res) => {
    if (req.headers.authorization) {
        // Extract the username from that header
            const token = req.headers.authorization.split(" ")[1];
            const result = await userService.getUserByName(token);
            if (!result) {
                return res.status(404).json("no user Found");
            } else {
                const newChat = await chatService.createChat(result.username);
                const x = {id: newChat.id, user:{
                                            username: newChat.user.username, 
                                            displayName: newChat.user.displayName, 
                                            profilePic: newChat.user.profilePic}
                };
                return res.json(x);
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