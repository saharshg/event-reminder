const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  venue: { type: String },
  date: { type: Date, required: true },
  reminder_schedule: { type: Date, required: true },
  organizer_id: { type: String, required: true },
});

module.exports = mongoose.model('Event', EventSchema);
