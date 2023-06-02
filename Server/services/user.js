const User = require('../models/user')
const UserPassName = require('../models/UserPassName')
const jwt = require('jsonwebtoken');

const createUser = async (username, password, displayName, profilePic) => {
    const users = await getAllUsers();
    const user = users.find((user) => user.username === username);
    if (!user) {
        const newUserPass = new UserPassName({ username: username, password: password, displayName: displayName, profilePic: profilePic });
        UserPassName.create(newUserPass);

        const newuser = new User({ username: username, displayName: displayName, profilePic: profilePic });
        const savedUser = await User.create(newuser);
        return savedUser;
    }
    //in case there is already user in this name
    else {
        return null;
    }
};

const getAllUsers = async () => { return await User.find({}); };

const getAllUsersPassName = async () => { return await UserPassName.find({}); };


const getUserByToken = async (token) => {
    try {
        // Verify the token is va
        const data = jwt.verify(token, "Some super secret key shhhhhhhhhhhhhhhhh!!!!!");
        return await User.findOne({ username: data.username });
    }
    catch (error) {
        return false;
    }
}

const getUserByName = async (userName) => {
    try {
        const users = await getAllUsers();
        const user = users.find((user) => user.username === userName);
        if (!user) {
            return null;
        }
        else {
            return user;
        }
    }
    catch (error) {
        return false;
    }
}


module.exports = { createUser, getAllUsers, getUserByToken, getAllUsersPassName , getUserByName};

