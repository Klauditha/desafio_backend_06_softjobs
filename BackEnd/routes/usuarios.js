const express = require('express');
const { usuariosController } = require('../controllers/index.js');
const router = express.Router();
const { authMiddleware } = require('../middlewares/auth.handler.js');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validation.handler.js');

const roles = [
  'Full Stack Developer',
  'Frontend Developer',
  'Backend Developer',
];
const lenguajes = ['JavaScript', 'Python', 'Ruby'];

router.post(
  '/usuarios',
  [
    check('email', 'El campo email es obligatorio')
      .not()
      .isEmpty()
      .isEmail()
      .withMessage('El email ingresado no es válido'),
    check('lenguage', 'El campo lenguage es obligatorio')
      .not()
      .isEmpty()
      .isIn(lenguajes)
      .withMessage('Ingrese un lenguaje válido (JavaScript, Python, Ruby)'),
    check('password', 'El campo password es obligatorio').not().isEmpty(),
    check('rol', 'El campo rol es obligatorio')
      .isIn(roles)
      .withMessage(
        'Ingrese un rol válido (Full Stack Developer, Frontend Developer, Backend Developer)'
      ),

    validarCampos,
  ],
  usuariosController.createUsuario
);

router.post(
  '/login',
  [
    check('email', 'El campo email es obligatorio')
      .not()
      .isEmpty()
      .isEmail()
      .withMessage('El email ingresado no es válido'),
    check('password', 'El campo password es obligatorio').not().isEmpty(),
    validarCampos,
  ],
  usuariosController.loginUsuario
);

router.get('/usuarios', authMiddleware, usuariosController.getUsuario);

module.exports = router;
