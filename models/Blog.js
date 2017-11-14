const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
    authorId: String,
    title: String,
    content: String,
    date: String
});

mongoose.model('blogs', blogSchema);