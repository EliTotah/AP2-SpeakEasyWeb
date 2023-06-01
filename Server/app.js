
const express = require('express');
var app = express();

const bodyParser = require ('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

const cors = require('cors');
app.use(cors());

const customEnv = require('custom-env');
customEnv.env(process.env.NODE_ENV, './config');

const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTION_STRING + "ChatDB", {
    useNewURLParser: true,
    useUnifiedTopology: true
});

const users =require ('./routes/user');
app.use('/api/Users', users);

const token = require('./routes/token');
app.use('/api/Tokens',token);

const chat = require('./routes/chat');
app.use('/api/Chats',chat);

app.use('/',express.static('../ChatApp/build'));

app.listen(process.env.PORT);