/** Route Model */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const routeSchema = new Schema(
  {
    code: {
      type: String,
      required: 'Route code cannot be blank.',
    },
    type: {
      type: String,
      required: 'Route type cannot be blank.',
    },
    stop1: {
      type: String,
      required: 'Stops cannot be blank.',
    },
    stop2: {
      type: String,
      required: 'Stops cannot be blank.',
    },
    pay: {
      type: Number,
      get: getPay,
      set: setPay,
      required: 'Pay cannot be blank.',
    },
    duration: {
      type: Number,
      required: 'Duration cannot be blank.',
    },
    distance: {
      type: Number,
      get: getD,
      set: setD,
      required: 'Distance cannot be blank.',
    },
  },
  { collection: 'routes' }
);

function getPay(num) {
  return (num / 100).toFixed(2);
}

function setPay(num) {
  return num;
}

function getD(num) {
  return (num / 10).toFixed(1);
}

function setD(num) {
  return num;
}

module.exports = mongoose.model('route', routeSchema);
