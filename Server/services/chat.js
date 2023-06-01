const chatService = require('../services/chat')
const userService = require('../services/user')
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const Chat = require('../models/chat');
const ChatCounter = require('../models/chatCounterSchema');

const createChat = async (loggedInUser,username1) => {
    const loggedUser = await User.findOne({ username: loggedInUser });
    if (loggedUser) {
        //const last = { id: null, created: null, content: null };
        const user = await User.findOne({ username: username1 });
        if (user) {
            const chatCounter = await ChatCounter.findOne();
            let chatId = 0;
            if (chatCounter) {
                // Increment the chat ID counter and save the updated value
                chatCounter.count += 1;
                await chatCounter.save();
                chatId = chatCounter.count;
            } else {
                // Create the chat ID counter document with an initial value of 1
                const newChatCounter = new ChatCounter();
                await newChatCounter.save();
            }
            const last = { id: null, created: null, sender: null, content: null };
            const chat = new Chat({ id: chatId, users: [loggedUser, user]});
            await chat.save();
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
            const chats = await Chat.find({'users.username': data.username });
            const contactList = chats.map((chat) => {
                const otherUsers = chat.users.filter((user) => user.username !==  data.username );
                var size= chat.messages.length
                var lastMessage;
                if(size==0)
                {
                lastMessage= {
                    created: null
                }
                }
                else
                {
                    lastMessage={
                        created: chat.messages[size-1].created
                    }
                }
                // Access the chat properties and perform operations
                const contact = {
                  id: chat.id,
                  user: otherUsers[0], //we have just one user in users that have other username
                  lastMessage: chat.lastMessage,
                  // Perform additional modifications as needed
                };
                return contact;
            });
            return contactList;
        }
    } catch (error) {
        // Handle error if the query fails
        console.error('Error occurred:', error);
        return[];
    }
}


const getChatById = async (id) => { return await Chat.findById(id); };

const deleteChat = async (id) => {
    const chat = await getChatById(id);
    if (!chat) return null;
    await chat.remove();
};


module.exports = {createChat, getChats, getChatById, deleteChat};