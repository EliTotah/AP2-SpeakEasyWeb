const Message = require('../models/message');
const chat = require('../services/chat')

const createMessage = async (id, content) => {
    /*const chat = await chat.getChatById(id);   
    // find the id
    var index;  
    if (chat) {
    const lastId = chat.lastMessage.id + 1;    
    const time = now.toLocaleTimeString(); // format the time as a string
    const sender = {username:};
    const chat = new Chat({ id:id1,user:user,lastMessage:last });
    if (last.lastMessage == NULL) 
            chat.lastMessage.created = null;
        return await chat.save();
    }
    else { return }*/
};

const getMessages = async (id) => { 
    /*const chat = await chat.getChatById(id);     
    if (chat) {
        return await Message.findById(id); 
    }*/
};

module.exports = {createMessage, getMessages};