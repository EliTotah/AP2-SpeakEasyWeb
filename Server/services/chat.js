const chatService = require('../services/chat')
const userService = require('../services/user')
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const Chat = require('../models/chat');
const ChatCounter = require('../models/chatCounterSchema');

const createChat = async (loggedInUser, username1) => {
    try {
        const loggedUser = await User.findOne({ username: loggedInUser });
        if (loggedUser) {
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
                const chat = new Chat({ id: chatId, users: [loggedUser, user], messages: [] });
                await chat.save();
                const x = { id: chat.id, user };
                return x
            }
            else { throw new Error("UserName not exist"); }
        }
        else { throw new Error("UserName not exist"); }
    }
    catch (error) {
        if (error.message == "UserName not exist")
            throw error;
        else
            throw new Error('Internal Server Error');
    }
};


const getChats = async (token) => {
    try {
        const data = jwt.verify(token, "Some super secret key shhhhhhhhhhhhhhhhh!!!!!");
        if (!data) {
            throw new Error("invalid token");
        }
        else {
            const chats = await Chat.find({ 'users.username': data.username });
            if (chats) {
                const contactList = chats.map((chat) => {
                    var lastMessage = null;
                    const otherUser = chat.users.find(user => user.username !== data.username);
                    if (otherUser) {
                        var size = chat.messages.length
                        if (size !== 0) {
                            lastMessage = chat.messages[size - 1];
                        }
                        // Access the chat properties and perform operations
                        const contact = {
                            id: chat.id,
                            user: otherUser, //we have just one user in users that have other username
                            lastMessage: lastMessage,
                            // Perform additional modifications as needed
                        };
                        return contact;
                    } else {
                        throw new Error("user not found");
                    }
                });
                return contactList;
            } else {
                throw new Error("chat not found");
            }
        }
    } catch (error) {
        if (error.message == "UserName not exist" || error.message == "chat not found")
            throw error;
        else
            throw new Error('Internal Server Error');
    }
};


const getChatById = async (id) => {
    try {
        return await Chat.findById(id);
    } catch (error) {
        throw new Error('Internal Server Error');
    }
};

const deleteChat = async (id) => {
    const chat = await getChatById(id);
    if (!chat) return null;
    await chat.remove();
};


module.exports = { createChat, getChats, getChatById, deleteChat };