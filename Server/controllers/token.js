//const { model } = require('mongoose');
const tokenService = require('../services/token');
const userService = require('../services/user')

function index(req, res) {
    res.json({ data: 'secret data' });
  }  

async function processLogin(req, res) {
  try {
    const users = await userService.getAllUsers();
    const user = users.find((user) => user.username === req.body.username && user.password === req.body.password);

    if (user) {
      const data = { username: req.body.username, password: req.body.password };
      const token = tokenService.generateToken(data);
      res.status(200).json({ token });
    } else {
      res.status(404).send('Invalid username and/or password');
    }
  } catch (error) {
    console.error('Error retrieving users:', error);
    res.status(500).send('Internal Server Error');
  }
}

  
  module.exports = {
    index,
    processLogin
  };