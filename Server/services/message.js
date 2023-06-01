
const Message = require('../models/message');
const chat = require('../services/chat')
const userService = require ('../services/user');

const createMessage = async (id, userName, content) => {
    const chats = await chat.getChatById(id);   
    // find the id
    if (chats) {
    const lastId = chats.lastMessage.id + 1;    
    const time = now.toLocaleTimeString(); // format the time as a string
    const sender = userService.getUserByName(userName);
    if(!sender){
        return 
    }
    const message = new Message({ id:lastId,created: time, sender: sender, content: content});
    return await chats.messages.create(message);
    }
    else { return  }
};

const getMessages = async (id) => { 
    const Chats = await chat.getChatById(id);
    if (Chats) {
        return await Chats.messages.find({}); 
    }
};

module.exports = {createMessage, getMessages};