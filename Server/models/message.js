const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const message = new Schema ({
    id: {
        type: Number,
        required: true
      },
      created: {
        type: Date,
        required: true
      },
      sender: {
        username: {
          type: String,
          required: true
        }
      },
      content: {
        type: String,
        required: true
      }
    });

module.exports = mongoose.model('message',message);