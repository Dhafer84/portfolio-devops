/*const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const contactRoute = require('./routes/contact.route');
const Message = require('./models/Message'); // ou le chemin correct selon ta structure

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(cors({
  origin: '*', // tu peux mettre aussi 'https://portfolio-frontend-XXXXX.onrender.com'
  methods: ['GET', 'POST'],
}));

// Routes
app.use('/api/contact', contactRoute);

// routes/statistics.js ou dans server.js
app.get('/api/stats/messages', async (req, res) => {
  try {
    const total = await Message.countDocuments();

    const messagesByDay = await Message.aggregate([
      {
        $group: {
          _id: {
            $dateToString: { format: "%Y-%m-%d", date: "$createdAt" }
          },
          count: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } }
    ]);

    app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});


    res.json({ total, messagesByDay });
  } catch (err) {
    console.error('❌ Erreur statistiques :', err);
    res.status(500).json({ error: 'Erreur statistiques messages' });
  }
});


// MongoDB URI (remplace <db_username> et <db_password> par tes vrais identifiants)
const MONGO_URI = 'mongodb+srv://dhafer84:yaya1984@cluster0.bctpkyl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ Connecté à MongoDB Atlas');
    app.listen(PORT, () => console.log(`🚀 Serveur backend lancé sur http://localhost:${PORT}`));
  })
  .catch(err => console.error('❌ Erreur connexion MongoDB:', err));
*/
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const contactRoute = require('./routes/contact.route');
const Message = require('./models/Message');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = 'jwt_secret_key_portfolio_2024'; // change-le pour + sécurisé
require('dotenv').config();

// Middleware
app.use(express.json());
app.use(cors({
  origin: '*', // ou spécifie ton frontend ex: 'https://portfolio-frontend.onrender.com'
  methods: ['GET', 'POST', 'DELETE']
}));

// MongoDB
const MONGO_URI = 'mongodb+srv://dhafer84:yaya1984@cluster0.bctpkyl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ Connecté à MongoDB Atlas');
    app.listen(PORT, () => console.log(`🚀 Serveur backend lancé sur http://localhost:${PORT}`));
  })
  .catch(err => console.error('❌ Erreur connexion MongoDB:', err));

// Routes
app.use('/api/contact', contactRoute);

// ✔️ Route hello test
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

// ✔️ Route stats
app.get('/api/stats/messages', async (req, res) => {
  try {
    const total = await Message.countDocuments();
    const messagesByDay = await Message.aggregate([
      {
        $group: {
          _id: {
            $dateToString: { format: "%Y-%m-%d", date: "$createdAt" }
          },
          count: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } }
    ]);
    res.json({ total, messagesByDay });
  } catch (err) {
    console.error('❌ Erreur statistiques :', err);
    res.status(500).json({ error: 'Erreur statistiques messages' });
  }
});

// 🔐 Route de login admin
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'admin123') {
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Identifiants invalides' });
  }
});
