const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Demo users (no DB needed)
const demoUsers = [
  {
    id: 1,
    email: 'student@campus.edu',
    password: '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92nFfDWF5w1/gmyW8kWWa', // password123
    username: 'student1'
  }
];

const JWT_SECRET = process.env.JWT_SECRET || 'demo-secret-change-in-production';

// Register (demo - always success)
router.post('/register', async (req, res) => {
  try {
    const { email, password, username } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Email/password required' });
    
    const hashed = await bcrypt.hash(password, 10);
    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' });
    res.status(201).json({ message: 'Registered', token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = demoUsers.find(u => u.email === email);
    
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });
    
    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) return res.status(401).json({ error: 'Invalid credentials' });
    
    const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, user: { id: user.id, email: user.email, username: user.username } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

