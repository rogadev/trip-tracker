/** Trip Routes */
const tripBuilder = require('../controllers/tripController');

module.exports = (app) => {
  app
    .route('/trips')
    .get(tripBuilder.list_all_trips)
    .post(tripBuilder.create_a_trip);

  app
    .route('/trip/:tripId')
    .get(tripBuilder.read_a_trip_by_id)
    .put(tripBuilder.update_a_trip)
    .delete(tripBuilder.delete_a_trip);

  app.route('/trips/:date').get(tripBuilder.read_a_trip_by_date);
};
