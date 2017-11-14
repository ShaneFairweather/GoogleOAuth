const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    profileId: String,
    username: String,
    image: String
});

mongoose.model('users', userSchema);