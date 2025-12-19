const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nombre: String,
  email: String,
  password: String,
  tipo: {
    type: String,
    enum: ['admin', 'normal', 'capitan', 'arbitro'],
    default: 'normal'
  },
  equipo: String
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
