const express = require('express');
const router = express.Router();
const Partido = require('../models/partido.model');

// ✅ CREAR PARTIDO
router.post('/', async (req, res) => {
  try {
    const partido = new Partido(req.body);
    await partido.save();
    res.status(201).json(partido);
  } catch (error) {
    res.status(400).json({ message: 'Error creando partido' });
  }
});

// ✅ ACTUALIZAR PARTIDO
router.put('/:id', async (req, res) => {
  try {
    const partido = await Partido.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(partido);
  } catch (error) {
    res.status(400).json({ message: 'Error actualizando partido' });
  }
});

// ✅ OBTENER TODOS LOS PARTIDOS
router.get('/', async (req, res) => {
  try {
    const partidos = await Partido.find();
    res.json(partidos);
  } catch (error) {
    res.status(500).json({ message: 'Error obteniendo partidos' });
  }
});

// ÁRBITRO – ver partidos asignados
router.get('/arbitro/:id', async (req, res) => {
  try {
    const arbitroId = req.params.id;

    const partidos = await Partido.find({ arbitroId });

    res.json(partidos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener partidos del árbitro' });
  }
});


// CAPITÁN – ver partidos de su equipo
router.get('/equipo/:equipo', async (req, res) => {
  try {
    const { equipo } = req.params;
    const partidos = await Partido.find({
      $or: [
        { equipoLocal: equipo },
        { equipoVisitante: equipo }
      ]
    });
    res.json(partidos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// CAPITÁN – introducir resultado
router.put('/resultado/:id', async (req, res) => {
  const partido = await Partido.findById(req.params.id);

  partido.resultadoCapitanLocal = req.body.local;
  partido.resultadoCapitanVisitante = req.body.visitante;

  if (
    partido.resultadoCapitanLocal === partido.resultadoCapitanVisitante
  ) {
    partido.estado = 'confirmado';
  } else {
    partido.estado = 'revision';
  }

  await partido.save();
  res.json(partido);
});

/**
 * Obtener todos los partidos de un equipo
 * Busca tanto en equipoLocal como en equipoVisitante
 */
router.get('/equipo/:equipo', async (req, res) => {
  const { equipo } = req.params;

  try {
    const partidos = await Partido.find({
      $or: [
        { equipoLocal: equipo },
        { equipoVisitante: equipo }
      ]
    }).sort({ fecha: 1 }); // opcional: orden por fecha ascendente

    res.json(partidos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener partidos del equipo' });
  }
});

module.exports = router;
