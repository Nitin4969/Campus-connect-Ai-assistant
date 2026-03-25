const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/posts', require('./routes/posts'));
app.use('/api/notes', require('./routes/notes'));
app.use('/api/events', require('./routes/events'));
app.use('/api/profiles', require('./routes/profiles'));

// MongoDB Connect - optional for demo
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/campusconnect')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB not connected - running in demo mode:', err.message));

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Campus Connect + AI Assistant Backend running!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

