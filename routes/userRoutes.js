const mongoose = require('mongoose');
const User = mongoose.model('users');


module.exports = app => {
    app.get("/users", function(req, res) {
        User.find({}, function(err, users) {
            res.send(users);
        })
    });
};

