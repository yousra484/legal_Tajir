require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Configuration du transporteur email
console.log('Informations de connexion:', {
  host: 'smtp.hostinger.com',
  port: 465,
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASS ? '****' : 'non défini'
});

const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Vérifier la connexion SMTP
transporter.verify((error, success) => {
  if (error) {
    console.error('Erreur de connexion SMTP:', error);
  } else {
    console.log('Serveur prêt à envoyer des emails');
  }
});

// Vérifier la configuration email
console.log('Configuration email actuelle:', {
  host: 'smtp.hostinger.com',
  port: 465,
  user: process.env.EMAIL_USER,
  passLength: process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : 0
});

// Vérifier la connexion SMTP
transporter.verify(function(error, success) {
  if (error) {
    console.log('Erreur de connexion SMTP:', error);
  } else {
    console.log('Serveur SMTP prêt à envoyer des emails');
  }
});

// Route pour envoyer l'email
app.post('/send-email', async (req, res) => {
  console.log('Requête reçue:', req.body);
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    console.error('Données manquantes dans la requête');
    return res.status(400).json({ error: 'Toutes les données sont requises' });
  }

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "contact@legaltajir.online",
      subject: `Nouveau message de ${name}`,
      text: `
        Nom: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h3>Nouveau message du formulaire de contact</h3>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    res.status(200).json({ message: 'Email envoyé avec succès' });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    res.status(500).json({ 
      error: 'Erreur lors de l\'envoi de l\'email',
      details: error.message
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
