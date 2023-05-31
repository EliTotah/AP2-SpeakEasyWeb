const express = require ('express');
var router = express.Router();

const userControllers = require('../controllers/user');


router.route('/')
    .post(userControllers.createUser)
    .get(userControllers.getAllUsers)
    .get(userControllers.getUserByName);

module.exports = router;
//export default router;