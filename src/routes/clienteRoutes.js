// backend/src/routes/clienteRoutes.js
const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
// const { protect } = require('../middleware/authMiddleware'); // Comente ou remova esta linha

// Rotas para Clientes
// Remova 'protect' de todas as rotas onde ele foi adicionado
router.post('/', clienteController.criarCliente);
router.get('/', clienteController.getClientes);
router.get('/:id', clienteController.getClienteById);
router.put('/:id', clienteController.atualizarCliente);
router.delete('/:id', clienteController.deletarCliente);

module.exports = router;