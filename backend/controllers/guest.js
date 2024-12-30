const Guest = require('../models/Guest');

exports.addGuest = async (req, res) => {
  try {
    const guest = new Guest(req.body);
    await guest.save();
    res.status(201).json(guest);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
