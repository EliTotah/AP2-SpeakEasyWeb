const Chat = require('../models/chat');
const User = require('../models/user');
const chatService = require('../services/chat')
const userService = require('../services/user')
const jwt = require('jsonwebtoken');

const createChat = async (username1) => {
    const user = await User.findOne({username : username1});
    if (user) {
        const user1 = {username:user.username, displayName:user.displayName, profilePic:user.profilePic};
        const last = {id:null, created:null, content:null};
        const chat = new Chat({ id:0,user:user1,lastMessage:last });
        return await chat.save();
    }
    else { return }
};



const getChats = async (token) => { 
    try {
        const data = jwt.verify(token, "Some super secret key shhhhhhhhhhhhhhhhh!!!!!");
        if(!data){
            return [];
        }
        else{
            const chats = await Chat.find({'users.username' : data.username});
            const newcha = await chats.users.find({'users.username' : { $ne:data.username}});
            return newcha;
        }
    } catch (error) {
        // Handle error if the query fails
        console.error('Error occurred:', error);
        return [];
    }
}


const getChatById = async (id) => { return await Chat.findById(id); };

const deleteChat = async (id) => {
    const chat = await getChatById(id);
    if (!chat) return null;
    await chat.remove();
};




module.exports = {createChat, getChats, getChatById, deleteChat};