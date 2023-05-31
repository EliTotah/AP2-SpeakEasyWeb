const express = require ('express');
var app = express();
const bodyParser = require ('body-parser');
const cors = require ('cors');
const mongoose = require ('mongoose');
const users =require ('./routes/user.js');


const customENV =require ('custom-env');
customENV.env(process.env.NODE_ENV, './config');

console.log(process.env.CONNECTION_STRING)
console.log(process.env.PORT)


mongoose.connect(process.env.CONNECTION_STRING).then(() => console.log("Connection to database successful."));

app.use(express.static('../Chat-app/build'))
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.json());


app.use('/api/Users', users);

app.listen(process.env.PORT);