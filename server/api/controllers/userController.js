/** User Controller */
const mongoose = require('mongoose');
const user = mongoose.model('user');
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.create_user = (req, res) => {
  user
    .findOne({ email: req.body.email })
    .exec()
    .then((result) => {
      if (result) {
        return res.status(409).json({
          message: 'An account already exists with that email address.',
        });
      } else {
        bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
          if (err) {
            res.send(err);
          } else {
            const newuser = new user({
              email: req.body.email,
              password: hash,
            });
            newuser.save((err, user) => {
              if (err) res.send(err);
              res.json(user);
            });
          }
        });
      }
    })
    .catch((err) => {
      console.error(err);
    });
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
