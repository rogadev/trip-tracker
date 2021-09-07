/** User Model */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: 'Email cannot be blank.',
      unique: true,
    },
    password: {
      type: String,
      required: 'Password cannot be blank.',
    },
  },
  { collection: 'users' }
);

module.exports = mongoose.model('user', userSchema);
