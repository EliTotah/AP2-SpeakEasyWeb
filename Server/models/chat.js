const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const chat = new Schema ({
    id: {
        type: Number,
        required: true
      },
      user: {
        username: {
          type: String,
          required: true
        },
        displayName: {
          type: String,
          //required: true
        },
        profilePic: {
          type: String,
        }
      },
      lastMessage: {
        id: {
          type: Number,
        },
        created: {
          type: Date,
        },
        content: {
          type: String,
        }
      }
    });

module.exports = mongoose.model('chat',chat);