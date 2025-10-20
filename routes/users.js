const express = require('express'); // importa express
const router = express.Router(); 
const Usuario = require('./models/Usuario'); 

// obtener todos los usuarios
router.get('/', async (req, res) => {
  try {
    const usuarios = await Usuario.findAll(); 
    res.json(usuarios); 
  } catch (err) {
    console.error(err); 
    res.status(500).send('error al consultar la base de datos'); 
  }
});

// crear un nuevo usuario
router.post('/', async (req, res) => {
  try {
    const { nombre } = req.body; // obtiene el nombre del cuerpo de la solicitud
    const nuevoUsuario = await Usuario.create({ nombre }); // crea el usuario en la bd
    res.json(nuevoUsuario); // devuelve el usuario creado
  } catch (err) {
    console.error(err);
    res.status(500).send('error al crear usuario');
  }
});

module.exports = router;
