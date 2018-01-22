const mongoose = require('mongoose');
const Blog = mongoose.model('blogs');


module.exports = app => {
    app.get('/api/:id/blog-posts', async (req, res, next) => {
        const authorId = req.params.id;
        const blogPosts = await Blog.find({authorId}).lean();
        res.send(blogPosts);
    });

    app.post('/api/:id/blog-posts/new', (req, res) => {
        const authorId = req.body.id;
        const title = req.body.title;
        const content = req.body.content;
        const blog = new Blog({
            authorId: authorId,
            title: title,
            content: content,
            date: new Date().toDateString()
        }).save();
    });
};