// backend/src/routes/rastreioRoutes.js
const express = require('express');
const router = express.Router();
const rastreioController = require('../controllers/rastreioController');
// const { protect } = require('../middleware/authMiddleware'); // Comente ou remova esta linha

// Rotas para Rastreios
// Remova 'protect' de todas as rotas onde ele foi adicionado
router.post('/', rastreioController.criarRastreio);
router.get('/', rastreioController.getTodosRastreios);
router.get('/:codigo', rastreioController.getRastreioByCodigo); // Esta rota já era pública
router.put('/:id/status', rastreioController.atualizarStatusRastreio);
router.delete('/:id', rastreioController.deletarRastreio);

module.exports = router;