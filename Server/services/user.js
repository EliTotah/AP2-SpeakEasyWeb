const User = require ('../models/user');
const jwt = require('jsonwebtoken');

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

// const getUserByName = async (userna) => {
//     // const users = getAllUsers();
//     // const user = users.find((user) => user.userName === username);      
//     const user = await User.findOne({username: userna});
//     if (user) {
//         return user
//     }
//     else{
//         return null;
//     }
// };


const getUserByName = async (token)=>{
    try {
// Verify the token is va
// lid
        const data = await jwt.verify(token, "Some super secret key shhhhhhhhhhhhhhhhh!!!!!");
         return await User.findOne({username : data.username});
    }

    catch (error){
        return false;

    }
}

module.exports =  {createUser, getAllUsers, getUserByName} ;

