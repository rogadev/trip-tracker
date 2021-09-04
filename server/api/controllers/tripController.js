/** Trip Controller */
const mongoose = require('mongoose');
const trip = mongoose.model('trip');

exports.list_all_trips = (req, res) => {
  trip.find({}, (err, trips) => {
    if (err) res.send(err);
    res.json(trips);
  });
};

exports.create_a_trip = (req, res) => {
  const newtrip = new trip(req.body);
  newtrip.save((err, trip) => {
    if (err) res.send(err);
    res.json(trip);
  });
};

exports.read_a_trip = (req, res) => {
  trip.findById(req.params.tripId, (err, trip) => {
    if (err) res.send(err);
    res.json(trip);
  });
};

exports.update_a_trip = (req, res) => {
  trip.findOneAndUpdate(
    { _id: req.params.tripId },
    req.body,
    { new: true },
    (err, trip) => {
      if (err) res.send(err);
      res.json(trip);
    }
  );
};

exports.delete_a_trip = (req, res) => {
  trip.deleteOne({ _id: req.params.tripId }, (err) => {
    if (err) res.send(err);
    res.json({
      message: 'trip successfully deleted',
      _id: req.params.tripId,
    });
  });
};
