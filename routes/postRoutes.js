const mongoose = require('mongoose');
const User = mongoose.model('posts');


module.exports = app => {
    app.get("/posts", function(req, res) {
        Post.find({}, function(err, posts) {
            res.send(posts);
        })
    });
};

