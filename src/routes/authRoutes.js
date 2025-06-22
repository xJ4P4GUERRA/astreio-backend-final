// backend/src/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');
// const { protect, authorize } = require('../middleware/authMiddleware'); // Comente ou remova esta linha

// Rota de Login (Pública)
router.post('/login', loginUser);

// Rota de Registro (Pública - Era Protegida, agora pública)
router.post('/register', registerUser); // Removido o middleware 'protect' e 'authorize'

module.exports = router;