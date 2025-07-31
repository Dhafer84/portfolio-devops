const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const SECRET = 'votre_clé_secrète';

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'admin123') {
    const token = jwt.sign({ username }, SECRET, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Identifiants invalides' });
  }
});

module.exports = router;
