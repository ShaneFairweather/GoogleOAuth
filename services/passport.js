const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
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
            const image = profile._json.image.url;
            console.log(profile.googleId);
            const existingUser = await User.findOne({googleId: profile.id});
                if(existingUser) {
                    return done(null, existingUser);
                }
                const user = await new User({
                    profileId: profile.id,
                    username: profile.displayName,
                    image: image.slice(0, image.length - 2) + '250'
               //     gravatar.url(profile.emails[0].value, {s: '100', r: 'x', d: 'retro'}, true)
                }).save();
                done(null, user);

        }
    )
);

passport.use(
    new FacebookStrategy(
        {
            clientID: keys.facebookClientID,
            clientSecret: keys.facebookClientSecret,
            callbackURL: '/auth/facebook/callback',
            proxy: true
        },
        async (accessToken, refreshToken, profile, done) => {
            console.log(profile);
            const existingUser = await User.findOne({profileId: profile.id});
            if(existingUser) {
                return done(null, existingUser);
            }
            const user = await new User({
                profileId: profile.id,
                username: profile.displayName,
                // image: image.slice(0, image.length - 2) + '250'
                //     gravatar.url(profile.emails[0].value, {s: '100', r: 'x', d: 'retro'}, true)
            }).save();
            done(null, user);

        }
    )
);
