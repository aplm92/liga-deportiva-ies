const mongoose = require('mongoose');

const partidoSchema = new mongoose.Schema({
  deporte: String,
  equipoLocal: String,
  equipoVisitante: String,
  arbitroId: String,
  fecha: Date,
  ubicacion: String,
  resultadoLocal: Number,
  resultadoVisitante: Number,
  
  estado: {
    type: String,
    default: 'pendiente' // pendiente | confirmado | revision
  }
});

module.exports = mongoose.model('Partido', partidoSchema);
