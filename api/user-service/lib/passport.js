const LocalStrategy = require('passport-local').Strategy;
const User = require('./User.model');

module.exports = function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use('local-signup', new LocalStrategy({
    usernameField : 'username',
    passwordField : 'password',
    passReqToCallback : true // allows us to pass back the entire request to the callback
  },
  function(req, username, password, done) {
    process.nextTick(function() {
      User.findOne({ 'username':  username }, (err, user) => {
        if (err) {
          return done(err);
        }

        if (user) {
          return done(null, false, ('username already taken'));
        } else {
          let newUser = new User();

          newUser.username = username;
          newUser.password = newUser.generateHash(password);

          newUser.save((err) => {
            if (err) {
              throw err;
            }

            return done(null, newUser);
          });
        }
      });
    });
  }));
};
