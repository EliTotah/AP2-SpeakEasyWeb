const Chat = require('../models/chat');
const User = require('../models/user');
const chatService = require('../services/chat')

const createChat = async (username1) => {
    //const users = chatService.getAllUsers();
    //const user = users.find((user) => user.userName === username); 
    const user = User.find({username1});
    if (user) {
        const user1 = {username:username1, displayName:displayName1, profilePic:profilePic1};
        const last = {lastMessage:IDlastMessage1, created:created1, content:content1};
        const chat = new Chat({ id:id1,user:user,lastMessage:last });
        if (last.lastMessage == NULL) 
            chat.lastMessage.created = null;
        return await chat.save();
    }
    else { return }
};

const getChats = async () => { 
    return await Chat.find({}); 
};


const getChatById = async (id) => { return await Chat.findById(id); };

const deleteChat = async (id) => {
    const chat = await getChatById(id);
    if (!chat) return null;
    await chat.remove();
};




module.exports = {createChat, getChats, getChatById, deleteChat};