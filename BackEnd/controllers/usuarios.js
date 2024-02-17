const getAllUsuarios = (req, res) => {
    try {
        res.status(200).send("Listado de usuarios")
    } catch (error) {
        res.status(500).send(error)
    }
}

const getUsuario = (req, res) => {
    try {
        res.status(200).send("Listado de usuarios")
    }
    catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    getAllUsuarios,
    getUsuario
}