// backend/src/server.js
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const clienteRoutes = require('./routes/clienteRoutes');
const rastreioRoutes = require('./routes/rastreioRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

app.use(express.json());

// --- CONFIGURAÇÃO DE CORS FINAL ---
const allowedOrigins = [
  'http://localhost:3000',
  'https://transportadoracentral.vercel.app' // <-- SUA URL CORRETA ADICIONADA AQUI!
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Não permitido pela política de CORS'));
    }
  }
}));

// Conexão com o MongoDB
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB conectado com sucesso!');
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Erro ao conectar ao MongoDB:', err.message);
    process.exit(1);
  });

// Rota de teste simples
app.get('/', (req, res) => {
  res.send('API de Rastreamento funcionando!');
});

// Adiciona as rotas da API
app.use('/api/clientes', clienteRoutes);
app.use('/api/rastreios', rastreioRoutes);
app.use('/api/auth', authRoutes);