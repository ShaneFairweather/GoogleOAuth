const mongoose = require('mongoose');
const Post = mongoose.model('posts');


module.exports = app => {
    // app.get("/posts", function(req, res) {
    //     Post.find({}, function(err, posts) {
    //         res.send(posts);
    //     })
    // });


    app.post("/api/add-post", (req, res, next) => {
        console.log('========');
        console.log('========');
        console.log('========');
        console.log('========');
        console.log('========');
        console.log(req.body);
        const author = req.body.author;
        const content = req.body.content;
        const avatar = req.body.avatar;

        new Post({
            author: author,
            content: content,
            image: avatar
        }).save(
            function(err) {
                if(err) {
                    return next(err);
                }
                //creation success response
                res.send("Post added");
                res.send(post);
                // res.json({ token: tokenForUser(user) });
            }
        );
    });
};