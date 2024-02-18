const { insertUsuario } = require('../querys/index');
const { pool } = require('../config/db');
const bcrypt = require('bcryptjs');

const getAllUsuarios = (req, res) => {
  try {
    res.status(200).send('Listado de usuarios');
  } catch (error) {
    res.status(500).send(error);
  }
};

const getUsuario = (req, res) => {
  try {
    res.status(200).send('Listado de usuarios');
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteUsuario = (req, res) => {
  try {
    res.status(200).send('Listado de usuarios');
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateUsuario = (req, res) => {
  try {
    res.status(200).send('Listado de usuarios');
  } catch (error) {
    res.status(500).send(error);
  }
};

///FAlTA VALIDAR SI EXISTE EL CORREO
const createUsuario = async (req, res) => {
  const { email, lenguage, password, rol } = req.body;
  console.log(email, lenguage, password, rol);
  try {
    await pool.query(
      insertUsuario(email, lenguage, bcrypt.hashSync(password, 10), rol)
    );
    res.status(200).send('Usuario creado');
  } catch (error) {
    res.status(500).send(error);
  }
};

const loginUsuario = (req, res) => {
  try {
    res.status(200).send('Listado de usuarios');
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAllUsuarios,
  getUsuario,
  deleteUsuario,
  updateUsuario,
  createUsuario,
  loginUsuario,
};
