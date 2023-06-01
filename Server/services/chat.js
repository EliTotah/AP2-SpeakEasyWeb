const Chat = require('../models/chat');
const User = require('../models/user');
const chatService = require('../services/chat')
const userService = require('../services/user')
const jwt = require('jsonwebtoken');

const createChat = async (loggedInUser,username1) => {
    const loggedUser = await User.findOne({ username: loggedInUser });
    if (loggedUser) {
        //const last = { id: null, created: null, content: null };
        const user = await User.findOne({ username: username1 });
        if (user) {
            // const chatCounter = await ChatCounter.findOne();
            // let chatId = 0;
            // if (chatCounter) {
            //     // Increment the chat ID counter and save the updated value
            //     chatCounter.count += 1;
            //     await chatCounter.save();
            //     chatId = chatCounter.count;
            // } else {
            //     // Create the chat ID counter document with an initial value of 1
            //     const newChatCounter = new ChatCounter();
            //     await newChatCounter.save();
            // }
            const last = { id: null, created: null, content: null };
            const chat = new Chat({ id: 0, users: [loggedUser, user], lastMessage: last });
            const x = {id: chat.id, user};
            return x
        }
        else { return }
    }
    else {return}
};




const getChats = async (token) => {
    try {
        const data = jwt.verify(token, "Some super secret key shhhhhhhhhhhhhhhhh!!!!!");
        if (!data) {
            return [];
        }
        else {
            const chats = await Chat.find({ 'user.username': data.username });
            //return chats;
        }
    } catch (error) {
        // Handle error if the query fails
        console.error('Error occurred:', error);
        return [];
    }
}


const getChatById = async (id) => { return await Chat.findById(id); };

const deleteChat = async (id) => {
    const chat = await getChatById(id);
    if (!chat) return null;
    await chat.remove();
};


module.exports = {createChat, getChats, getChatById, deleteChat};