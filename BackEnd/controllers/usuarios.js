const jwt = require('jsonwebtoken');

const { insertUsuario, getUsuarioByEmail } = require('../querys/index');
const { pool } = require('../config/db');
const bcrypt = require('bcryptjs');

const getUsuario = async (req, res, next) => {
  const email = req.email;
  try {
    const query = await pool.query(getUsuarioByEmail(email));
    const data = query.rows[0];
    if (data) {
      const user = {
        id: data.id,
        email: data.email,
        lenguage: data.lenguage,
        rol: data.rol,
      };
      res.status(200).json(user);
    } else {
      res.status(400).json({ message: 'Email no existe' });
    }
  } catch (error) {
    next(error);
  }
};

const createUsuario = async (req, res, next) => {
  const { email, lenguage, password, rol } = req.body;
  try {
    const query = await pool.query(getUsuarioByEmail(email));
    const data = query.rows[0];
    if (data)
      res.status(400).json({ message: 'Email ya existe en el sistema' });
    const queryInsert = await pool.query(
      insertUsuario(email, lenguage, bcrypt.hashSync(password, 10), rol)
    );
    if (queryInsert.rowCount == 0)
      res.status(400).json({ message: 'Error al crear usuario' });
    else {
      res.status(200).json({
        user: {
          id: queryInsert.rows[0].id,
          email: queryInsert.rows[0].email,
          lenguage: queryInsert.rows[0].lenguage,
          rol: queryInsert.rows[0].rol,
        },
        message: 'Usuario creado',
      });
    }
  } catch (error) {
    next(error);
  }
};

const loginUsuario = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const query = await pool.query(getUsuarioByEmail(email));
    const data = query.rows[0];
    const isMatch = bcrypt.compareSync(password, data.password);
    if (!isMatch) res.status(400).json({ message: 'Credenciales incorrectas' });
    else {
      const token = createPayload(data);
      res.status(200).json({ token });
    }
  } catch (error) {
    next(error);
  }
};

const createPayload = (user) => {
  const payload = {
    email: user.email,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET , { expiresIn: '1m' });
  return token;
};

module.exports = {
  getUsuario,
  createUsuario,
  loginUsuario,
};
