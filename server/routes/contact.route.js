/*const express = require('express');
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
*/
const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const nodemailer = require('nodemailer');
require('dotenv').config();
// 🔐 Configuration du transporteur SMTP Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
     user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS        // ✅ Mot de passe d’application
  }
});

// ✅ GET : Récupérer les messages
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// ✅ POST : Ajouter un message et envoyer un e-mail
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newMsg = new Message({ name, email, message });
    await newMsg.save();
    console.log('✅ Message enregistré dans MongoDB:', newMsg);

    // ✉️ Envoi du mail
    const mailOptions = {
      from: '"Portfolio Contact" <portfolio.notify@gmail.com>',
      to: 'boutheljad84@gmail.com',
      subject: '📨 Nouveau message du portfolio',
      html: `
        <h2>📥 Nouveau message reçu</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('📧 Email envoyé avec succès à boutheljad84@gmail.com');

    res.status(201).json({ success: true });
  } catch (error) {
    console.error('❌ Erreur:', error);
    res.status(500).json({ success: false });
  }
});

// ❌ DELETE : Supprimer un message
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
