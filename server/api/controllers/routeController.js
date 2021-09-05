/** Route Controller */
const mongoose = require('mongoose');
const route = mongoose.model('route');

exports.list_all_routes = (req, res) => {
  route.find({}, (err, routes) => {
    if (err) res.send(err);
    res.json(routes);
  });
};

exports.create_a_route = (req, res) => {
  const newroute = new route(req.body);
  newroute.save((err, route) => {
    if (err) res.send(err);
    res.json(route);
  });
};

exports.read_a_route = (req, res) => {
  route.findById(req.params.routeId, (err, route) => {
    if (err) res.send(err);
    res.json(route);
  });
};

exports.find_route_by_stops = (req, res) => {
  route.findOne(
    {
      $or: [
        { stop1: req.params.stop1, stop2: req.params.stop2 },
        { stop1: req.params.stop2, stop2: req.params.stop1 },
      ],
    },
    (err, route) => {
      if (err) res.send(err);
      res.json(route);
    }
  );
};

exports.update_a_route = (req, res) => {
  route.findOneAndUpdate(
    { _id: req.params.routeId },
    req.body,
    { new: true },
    (err, route) => {
      if (err) res.send(err);
      res.json(route);
    }
  );
};

exports.delete_a_route = (req, res) => {
  route.deleteOne({ _id: req.params.routeId }, (err) => {
    if (err) res.send(err);
    res.json({
      message: 'route successfully deleted',
      _id: req.params.routeId,
    });
  });
};
