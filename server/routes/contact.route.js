const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newMsg = new Message({ name, email, message });
    await newMsg.save();
    console.log('✅ Message enregistré dans MongoDB:', newMsg);
    res.status(201).json({ success: true });
  } catch (error) {
    console.error('❌ Erreur MongoDB:', error);
    res.status(500).json({ success: false });
  }
});
// DELETE : supprimer un message par ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMessage = await Message.findByIdAndDelete(id);

    if (!deletedMessage) {
      return res.status(404).json({ error: 'Message non trouvé' });
    }

    res.json({ message: 'Message supprimé avec succès' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

module.exports = router;
