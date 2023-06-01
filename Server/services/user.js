const User = require ('../models/user');

const createUser = async (username, password, displayName, profilePic)=>{
    const users = await getAllUsers();
    const user = users.find((user) => user.username === username);      
    if (!user) {
    const user = new User({username: username ,password: password, displayName: displayName, profilePic: profilePic});
    const savedUser = await User.create(user);
    return savedUser;
    }
    //in case there is already user in this name
    else{
        return null;
    }
};

const getAllUsers = async () => { return await User.find({}); };

const getUserByName = async (username) => {
    const users = getAllUsers();
    const user = users.find((user) => user.userName === username);      
    //const user = await User.find({username});
    if (user) {
        return user
    }
    else{
        return null;
    }
};

module.exports =  {createUser, getAllUsers, getUserByName} ;

