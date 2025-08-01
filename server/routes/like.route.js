const express = require('express');
const router = express.Router();
const Like = require('../models/Like');

// GET like count
router.get('/', async (req, res) => {
  try {
    let like = await Like.findOne();
    if (!like) {
      like = new Like({ count: 0 });
      await like.save();
    }
    res.json({ count: like.count });
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// POST increment like
router.post('/', async (req, res) => {
  try {
    let like = await Like.findOne();
    if (!like) {
      like = new Like({ count: 1 });
    } else {
      like.count += 1;
    }
    await like.save();
    res.json({ count: like.count });
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

module.exports = router;
