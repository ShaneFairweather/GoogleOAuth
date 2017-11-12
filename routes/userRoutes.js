const mongoose = require('mongoose');
const User = mongoose.model('users');


module.exports = app => {
    app.get("/api/users", (req, res) => {
        User.find({}, (err, users) => {
            res.send(users);
        })
    });
};

