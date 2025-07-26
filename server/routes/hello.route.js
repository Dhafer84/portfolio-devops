// server/routes/hello.route.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Bonjour depuis le backend Node.js !' });
});

module.exports = router;
