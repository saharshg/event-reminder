const express = require('express');
const { addGuest } = require('../controllers/guest');
const router = express.Router();

router.post('/guest', addGuest);

module.exports = router;
