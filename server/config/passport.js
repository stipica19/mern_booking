const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const User = require("../models/User");

const GOOGLE_CLIENT_ID =
  "599944245072-fhsb2oaimbc37dtn8t4g67rftd10si9c.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

module.exports = function (passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        const newUser = {
          googleId: profile.id,
          displayName: profile.displayName,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          image: profile.photos[0].value,
        };

        try {
          let user = await User.findOne({ googleId: profile.id });

          if (user) {
            done(null, user);
          } else {
            user = await User.create(newUser);
            done(null, user);
          }
        } catch (err) {
          console.error(err);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    // console.log("seee-----", user);
    done(null, user);
  });

  passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    //console.log("user---------------", user.displayName);
    done(null, user);
  });
};
