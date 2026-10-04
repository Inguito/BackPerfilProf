const express = require('express');
const router = express.Router();
const profesorTituloController = require('../controllers/profesorTituloController');

// Rutas para el recurso "profesorTitulo"

// trae todos los profesorTitulos
router.get('/', profesorTituloController.getAllProfesorTitulos);

// crea un nuevo profesorTitulo
router.post('/', profesorTituloController.createProfesorTitulo);

// trae un profesorTitulo por id
router.get('/:id', profesorTituloController.getProfesorTituloById);
router.put('/:id', profesorTituloController.updateProfesorTitulo);

// elimina un profesorTitulo por id
router.delete('/:id', profesorTituloController.deleteProfesorTitulo);

module.exports = router;
