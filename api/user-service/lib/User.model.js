const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const bcrypt = require('bcrypt-nodejs');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: false,
  },
  password: {
    type: Object,
    required: true,
  }
});

UserSchema.plugin(timestamps);

UserSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};


module.exports = mongoose.model('User', UserSchema);