/** User Controller */
const mongoose = require('mongoose');
const user = mongoose.model('user');
const bcrypt = require('bcrypt');
const saltRounds = 10;

/**
 * Create a new user in the database.
 * First checks to see if there is an existing user with the provided email address (username).
 * Takes a raw password and hashes it before creating a new user.
 * @param {*} req
 * @param {*} res
 */
exports.create_user = (req, res) => {
  // We receive the raw password and email address for server-side validation and user creation.
  const userEmail = req.body.email;
  const rawPw = req.body.password;

  /**
   * Validates the given email address using regex.
   * @returns {Boolean} true if valid.
   */
  const emailValid = () => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(userEmail).toLowerCase());
  };

  // Stop here and send response if the provided email address is invalid.
  if (!emailValid())
    res.send(
      'The email you entered is not valid. Please submit a valid email address.'
    );

  /**
   * Validates the provided raw password. Must be minimum of 6 characters long.
   * @returns {Boolean} true if valid.
   */
  const passValid = () => {
    if (rawPw.length < 6) {
      return false;
    } else return true;
  };

  // If the password provided is not 6 or more characters long, stop here and send response.
  // Otherwise, we've met the minimum requirements. Hash the password and create a new user.
  if (!passValid())
    res.send('Password not valid. Must be 6 characters or longer.');
  else {
    // Generate salt.
    bcrypt.genSalt(saltRounds, (err, salt) => {
      // Generate hash.
      bcrypt.hash(rawPw, salt, (err, hash) => {
        /**
         * Using the mongoose model, user, look to see if we have an existing user with that email address.
         * If the user doesn't yet exist, use the email and hashed password to create a new user.
         * Otherwise, respond with a message explaining that the user already exists.
         */
        user
          .findOne({ email: userEmail })
          .then((existingUser) => {
            if (!existingUser) {
              const newUser = new user({
                email: userEmail,
                password: hash,
              });
              newUser.save((err, user) => {
                if (err) res.send(err);
                res.status(200).send('New user created.');
              });
            } else {
              res.status(409).send('User already exists.');
            }
          })
          .catch((err) => console.log(err));
      });
    });
  }
};

exports.update_user = (req, res) => {
  user.findOneAndUpdate(
    { _id: req.params.userId },
    req.body,
    { new: true },
    (err, user) => {
      if (err) res.send(err);
      res.json(user);
    }
  );
};

exports.delete_user = (req, res) => {
  user.deleteOne({ _id: req.params.userId }, (err) => {
    if (err) res.send(err);
    res.json({
      message: 'user successfully deleted',
      _id: req.params.userId,
    });
  });
};
