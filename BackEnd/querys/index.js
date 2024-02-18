const format = require('pg-format');

const insertUsuario = (email, lenguage, password, rol) => {
  const query = format(
    'INSERT INTO usuarios (email, lenguage, password, rol) VALUES (%L, %L, %L, %L)',
    email,
    lenguage,
    password,
    rol
  );
  return query;
};

module.exports = {
  insertUsuario,
};
