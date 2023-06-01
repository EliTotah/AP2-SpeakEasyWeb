const chatService = require('../services/chat');

const createChat = async (req, res) => {
    res.json(await chatService.createChat(req.body.username));
};

const getChats = async (req, res) => {
    res.json(await chatService.getChats());
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