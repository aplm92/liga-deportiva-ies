const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario.model');

// REGISTRO
router.post('/register', async (req, res) => {
  try {
    const { nombre, email, password, tipo } = req.body;
    const existe = await Usuario.findOne({ email });
    if (existe) return res.status(400).json({ mensaje: 'Usuario ya existe' });

    const nuevoUsuario = new Usuario({ nombre, email, password, tipo });
    await nuevoUsuario.save();
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error en el servidor' });
  }
});

// LOGIN
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const usuario = await Usuario.findOne({ email, password });
    if (!usuario) return res.status(404).json({ mensaje: 'Usuario no encontrado' });

    res.json(usuario); // Esto devuelve { _id, nombre, email, tipo }
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error en el servidor' });
  }
});

module.exports = router;
