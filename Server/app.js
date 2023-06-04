
const express = require('express');
var app = express();

const http = require("http");
const {Server} = require("socket.io");

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
const { Socket } = require('dgram');
app.use('/api/Chats',chat);

app.use('/',express.static('../ChatApp/build'));

app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "DELETE"],
    },
});

io.on("connection", (socket) => {
    socket.on("join_chat", (data) => {
        socket.join(data);
    });

    socket.on("send_message", (data) => {
        socket.to(data.chatId).emit("receive_message",data);
    });
})

server.listen(process.env.PORT);