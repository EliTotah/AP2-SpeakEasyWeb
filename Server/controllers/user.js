const userService = require ('../services/user');

const createUser = async (req, res) =>{
    const user = await userService.createUser(req.body.username, req.body.password, req.body.displayName, req.body.profilePic);
    if(!(user)) {
        res.status(409);
    }
    else {
        res.json(user);
    }
    
};
const getAllUsers = async (req, res) => {
    res.json(await userService.getArticles());
};

const getUserByName = async (req, res) => {
    const user = await userService.getUserByName(req.param.username);
    if (!user) {
        res.status(404).json({ error: 'User not found' });
    } else {
        res.status(200).json(user);
    }
};


module.exports = {createUser, getAllUsers, getUserByName}; 
//export default createUser;