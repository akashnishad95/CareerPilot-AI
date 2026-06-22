const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true,
        unique: [true, 'Username already exists']
    },
    Email: {
        type: String,
        required: true,
        unique: [true, 'Email already exists']
    },  
    Password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;