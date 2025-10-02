const express = require('express');
const router = express.Router();
const Usuario = require('./models/Usuario');

router.get('/', async (req, res) => {   // <-- solo '/'
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al consultar la base de datos');
  }
});

module.exports = router;
