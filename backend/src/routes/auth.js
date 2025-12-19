const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');

// REGISTRO
router.post('/register', async (req, res) => {
  try {
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al registrar usuario' });
  }
});

// LOGIN
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const usuario = await Usuario.findOne({ email, password });
  if (!usuario) {
    return res.status(401).json({ mensaje: 'Credenciales incorrectas' });
  }

  res.json(usuario);
});

module.exports = router;
