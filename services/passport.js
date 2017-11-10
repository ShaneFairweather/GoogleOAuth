const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    // user.id refers to the id assigned by the database, not the OAuth (google, facebook, etc) id.
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        });
});

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true
        },
        async (accessToken, refreshToken, profile, done) => {
            // console.log(profile._json.image.url);
            const existingUser = await User.findOne({googleId: profile.id});
                if(existingUser) {
                    return done(null, existingUser);
                }
                const user = await new User({
                    googleId: profile.id,
                    username: profile.displayName,
                    image: profile._json.image.url
                }).save();
                done(null, user);

        }
    )
);
