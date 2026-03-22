const express = require('express');
const router = express.Router();

// Placeholder routes
router.get('/', (req, res) => {
  res.json({ message: 'Posts feed', posts: [] });
});

router.post('/', (req, res) => {
  res.status(201).json({ message: 'Create post endpoint' });
});

module.exports = router;

