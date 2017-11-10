const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    username: String,
    image: String
});

mongoose.model('users', userSchema);