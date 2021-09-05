/** Trip Model */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const tripSchema = new Schema(
  {
    date: {
      type: Date,
      required: 'A trip must have a date.',
    },
    route: {
      type: Object,
      required: 'A trip must have a route.',
    },
  },
  { collection: 'trips' }
);

module.exports = mongoose.model('trip', tripSchema);
