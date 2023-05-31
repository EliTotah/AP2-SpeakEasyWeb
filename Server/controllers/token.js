const tokenService1 = require('../services/token');

function index(req, res) {
    res.json({ data: 'secret data' });
  }  

  function processLogin(req, res) {
    //const users = getallusers();
    //const user = users.find((user) => user.userName === req.body.username && user.password === req.body.password);      
    if(req.body.username === 'e1' && req.body.password === 'Haim10@') {
    //if (user) {
        const data = { username: req.body.username};
        const token = model.tokenService1.generateToken(data);
        res.status(200).json({ token });
    }
    else {
      res.status(404).send('Invalid username and/or password');
    }
  }
  
  module.exports = {
    index,
    processLogin
  };