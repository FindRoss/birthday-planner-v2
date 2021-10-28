const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: false },
  name: { type: String, required: true },
  occasion: { type: String, required: true },
  startDate: { type: Date, required: false },
}, {
  timestamps: true,
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;