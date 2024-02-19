const express = require('express');
const { usuariosController } = require('../controllers/index.js');
const router = express.Router();
const { authMiddleware } = require('../middlewares/auth.handler.js');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validation.handler.js');

router.post(
  '/usuarios',
  [
    check('email', 'El campo email es obligatorio').not().isEmpty(),
    check('lenguage', 'El campo lenguage es obligatorio').not().isEmpty(),
    check('password', 'El campo password es obligatorio').not().isEmpty(),
    check('rol', 'El campo rol es obligatorio').not().isEmpty(),
    validarCampos,
  ],
  usuariosController.createUsuario
);

router.post(
  '/login',
  [
    check('email', 'El campo email es obligatorio').not().isEmpty(),
    check('password', 'El campo password es obligatorio').not().isEmpty(),
    validarCampos,
  ],
  usuariosController.loginUsuario
);

router.get('/usuarios', authMiddleware, usuariosController.getUsuario);

module.exports = router;
