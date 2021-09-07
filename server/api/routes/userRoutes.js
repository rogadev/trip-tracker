/** User Routes */
const userBuilder = require('../controllers/userController');

module.exports = (app) => {
  app
    .route('/user/:userId')
    .put(userBuilder.update_user)
    .delete(userBuilder.delete_user);

  app.route('/user/signup').post(userBuilder.create_user);
};
