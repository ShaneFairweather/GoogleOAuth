const mongoose = require('mongoose');
const Blog = mongoose.model('blogs');


module.exports = app => {
    app.get('/api/:id/blog', (req, res) => {
        Blog.findById(req.params.id, (err, blogs) => {
            res.send(blogs);
        })
    });

    app.post('/api/add-blog', (req, res) => {
        const authorId = req.body.googleId;
        const title = req.body.title;
        const content = req.body.content;
        console.log(authorId);
        const blog = new Blog({
            authorId: authorId,
            title: title,
            content: content,
            date: new Date().toDateString()
        }).save();
    });
}