const express = require('express');
const router = express.Router();
const habilitacionController = require('../controllers/habilitacionController');

// Rutas para el recurso "habilitacion"


// trae todos las habilitaciones
router.get('/', habilitacionController.getAllHabilitaciones);

// crea una nueva habilitacion
router.post('/', habilitacionController.createHabilitacion);

// trae una habilitacion por id
router.get('/:id', habilitacionController.getHabilitacionById);
router.put('/:id', habilitacionController.updateHabilitacion);

// elimina una habilitacion por id
router.delete('/:id', habilitacionController.deleteHabilitacion);

module.exports = router;
