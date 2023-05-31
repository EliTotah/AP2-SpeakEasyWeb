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
          required: true
        },
        profilePic: {
          type: String,
          required: true
        }
      },
      lastMessage: {
        id: {
          type: Number,
          required: true
        },
        created: {
          type: Date,
          required: true
        },
        content: {
          type: String,
          required: true
        }
      }
    });

module.exports = mongoose.model('chat',chat);