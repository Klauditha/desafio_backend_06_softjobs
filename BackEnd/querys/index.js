const format = require('pg-format');

const insertUsuario = (email, lenguage, password, rol) => {
  const query = format(
    'INSERT INTO usuarios (email, lenguage, password, rol) VALUES (%L, %L, %L, %L) RETURNING *',
    email,
    lenguage,
    password,
    rol
  );
  return query;
};

const getUsuarioByEmail = (email) => {
  const query = format('SELECT * FROM usuarios WHERE email = %L', email);
  return query;
};

module.exports = {
  insertUsuario,
  getUsuarioByEmail,
};
