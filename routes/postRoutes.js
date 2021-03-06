const mongoose = require('mongoose');
const Post = mongoose.model('posts');


module.exports = app => {
    app.post("/api/posts/new", (req, res, next) => {
        const author = req.body.author;
        const content = req.body.content;
        const avatar = req.body.avatar;

        const post = new Post({
            author: author,
            content: content,
            date:  new Date().toDateString(),
            avatar: avatar
        }).save();
    });

    app.get("/api/posts", (req, res) => {
        Post.find({}, (err, posts) => {
            res.send(posts);
        })
    });
};