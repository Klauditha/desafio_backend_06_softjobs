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

const createUsuario = (req, res) => {
    console.log(req.body)
  try {
    console.log("creando usuario")
    res.status(200).send('Listado de usuarios');
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
}

module.exports = {
  getAllUsuarios,
  getUsuario,
  deleteUsuario,
  updateUsuario,
  createUsuario,
  loginUsuario
};
