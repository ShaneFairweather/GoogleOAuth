const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    author: String,
    content: String,
    date: String,
    avatar: String
});

mongoose.model('posts', postSchema);