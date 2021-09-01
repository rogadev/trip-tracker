/** Route Routes */
const routeBuilder = require('../controllers/routeController');

module.exports = (app) => {
  app
    .route('/routes')
    .get(routeBuilder.list_all_routes)
    .post(routeBuilder.create_a_route);

  app
    .route('/routes/:routeId')
    .get(routeBuilder.read_a_route)
    .put(routeBuilder.update_a_route)
    .delete(routeBuilder.delete_a_route);
};
