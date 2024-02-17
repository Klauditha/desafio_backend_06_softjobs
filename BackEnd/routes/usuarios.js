const express = require('express');
const { usuariosController } = require('../controllers/index.js');
const router = express.Router();
const { authMiddleware } = require('../middlewares/auth.handler.js');

router.post('/usuarios', authMiddleware, usuariosController.createUsuario);
router.get('/usuarios', authMiddleware, usuariosController.getUsuario);
router.post('/login', usuariosController.loginUsuario);

module.exports = router;
