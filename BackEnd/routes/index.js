const express = require('express');
const router = express.Router();
const usuariosRouter = require('./usuarios');
const {reportQuery} = require('../middlewares/report.handler');

//middleware
router.use('/', reportQuery, usuariosRouter);

module.exports = router;
