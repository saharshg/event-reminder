const express = require('express');
const connectDB = require('./config/db');
const eventRoutes = require('./routes/events');
const guestRoutes = require('./routes/guests');
const cors = require('cors');

require('dotenv').config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use(eventRoutes);
app.use(guestRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
