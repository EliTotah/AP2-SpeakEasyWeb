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

const getUserByName = async (req,res) => {
    if (req.headers.authorization) {
    // Extract the token from that header
        const token = req.headers.authorization.split(" ")[1];
        const result = await userService.getUserByName(token);
        if (!result) {
            return res.status(404).json("no user Found");
        } else {
            if(result.username !== req.params.username)
            {
                return res.status(401).json("Unauthorized");
            }
            const x = {username: result.username, displayName: result.displayName, profilePic: result.profilePic};
            return res.json(x);
        }
    } else{
    }
}

module.exports = {createUser, getAllUsers, getUserByName}; 
//export default createUser;