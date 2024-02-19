const jwt = require('jsonwebtoken');

const { insertUsuario, getUsuarioByEmail } = require('../querys/index');
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

const createUsuario = async (req, res) => {
  const { email, lenguage, password, rol } = req.body;
  try {
    const query = await pool.query(getUsuarioByEmail(email));
    const data = query.rows[0];
    if (data) res.status(400).send('Email ya existe');
    await pool.query(
      insertUsuario(email, lenguage, bcrypt.hashSync(password, 10), rol)
    );
    res.status(200).send('Usuario creado');
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const loginUsuario = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    const query = await pool.query(getUsuarioByEmail(email));
    const data = query.rows[0];
    const isMatch = bcrypt.compareSync(password, data.password);
    if (!isMatch) throw new Error('Credenciales incorrectas');
    else {
      const token = createPayload(data);
      res.status(200).json({ token });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const createPayload = (user) => {
  const payload = {
    email: user.email,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET);
  return token;
};

module.exports = {
  getAllUsuarios,
  getUsuario,
  deleteUsuario,
  updateUsuario,
  createUsuario,
  loginUsuario,
};
