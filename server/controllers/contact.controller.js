// server/controllers/contact.controller.js
exports.receiveMessage = (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Tous les champs sont requis' });
  }

  console.log('📩 Message reçu :', { name, email, message });

  // Simulation de traitement (ajout dans une base JSON plus tard)
  res.status(200).json({ success: true, message: 'Message bien reçu !' });
};
