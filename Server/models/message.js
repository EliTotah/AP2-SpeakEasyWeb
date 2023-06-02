const mongoose = require('mongoose');
const UserSchema = require('./user')

const Schema = mongoose.Schema;

const message = new Schema ({
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

module.exports = mongoose.model('Message', message);
