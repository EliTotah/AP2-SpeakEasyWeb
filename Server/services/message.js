
const Message = require('../models/message');
const chat = require('../models/chat')
const userService = require ('../services/user');

const createMessage = async (id, userName, content) => {
    const chats = await chat.findOne({id});   
    // find the id
    if (chats) {   
    const time = new Date().toLocaleString(); // format the time as a string
    const sender = await userService.getUserByName(userName);
    if(!sender){
        return 
    }
    const message = new Message ({created: time, sender: sender, content: content});
    const savedMessage = await Message.create(message);
    chats.messages.push(savedMessage);
    await chats.save();
    return await savedMessage.save();
    }
    else { return  }
};

const getMessages = async (id) => { 
    const Chats = await chat.findOne({id});
    if (Chats) {
        return await Chats.messages; 
    }
};

module.exports = {createMessage, getMessages};