const express = require('express');
const { createEvent, getEvents } = require('../controllers/event');
const router = express.Router();

router.post('/event', createEvent);
router.get('/events', getEvents);

module.exports = router;
