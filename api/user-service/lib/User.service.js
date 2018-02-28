const User = require('./User.model');
const bcrypt = require('bcrypt-nodejs');

const generateHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

const isValidPassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

function postUser({ username, password }) {
  return User.findOne({ username })
    .then(user => {
      if (user) {
        throw new Error('username in use')
      } else {
        return User.create({
          username,
          password: generateHash(password),
        });
      }
    });
}

function login({ username, password }) {
  return User.findOne({ username })
    .then(user => {
      if (isValidPassword(password, user.password)) {
        return { access: 'grated' };
      } else {
        throw new Error('invalid password');
      }
    })
}

module.exports = {
  postUser,
  login,
};
