const Event = require('../models/Event');
const schedule = require('node-schedule');
const { sendWhatsAppMessage } = require('../services/whatsapp');
const Guest = require('../models/Guest');

exports.createEvent = async (req, res) => {
  console.log(req);
  try {
    const event = new Event(req.body);
    await event.save();

    // Schedule reminder
    schedule.scheduleJob(event.reminder_schedule, async () => {
      const guests = await Guest.find({ event_id: event._id });
      const message = `Reminder: ${event.title} at ${event.venue} on ${event.date}`;
      guests.forEach((guest) => {
        sendWhatsAppMessage(guest.phone_number, message);
      });
    });

    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
