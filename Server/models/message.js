const mongoose = require('mongoose');
const UserSchema = require('./user')

const Schema = mongoose.Schema;

const message = new Schema ({
    id: {
        type: Number,
        nullable: true 
      },
    created: {
        type: Date,
        nullable: true 
    },
    sender: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        nullable: true 
    },
    content: {
        type: String,
        nullable: true 
    }
    });

const Message1 = mongoose.model('Message', message);

module.exports = {
  Message1,
};
