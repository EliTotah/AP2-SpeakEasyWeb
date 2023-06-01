const mongoose = require('mongoose');
const User = require('./user');
const Message = require('./message');

const Schema = mongoose.Schema;

const ChatSchema = new Schema({
  id: {
    type:  Number,
    required: true
  },
  users: {
    type: [User.schema],
    nullable: true
  },
  messages: {
    type: [Message.schema],
    nullable: true
  }
});

const Chat = mongoose.model('Chat', ChatSchema);

module.exports = {Chat};