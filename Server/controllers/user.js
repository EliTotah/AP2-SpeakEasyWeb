const userService =require ('../services/user');

const createUser = async (req, res) =>{
    if(!(await userService.createUser(req.body.username, req.body.password, req.body.displayName, req.body.profilePic))){
        res.status(409);
    }
    else{
    res.json(await userService.createUser(req.body.username, req.body.password, req.body.displayName, req.body.profilePic))
    }
    
};
const getAllUsers = async (req, res) => {
    res.json(await userService.getArticles());
};

const getUserByName = async (req, res) => {
    if(!(await userService.getUserByName(req.param.username))){
        res.status(404);
    }
    else{
    res.json(await userService.getUserByName(req.param.username));
    }
};


module.exports = {createUser, getAllUsers, getUserByName}; 
//export default createUser;