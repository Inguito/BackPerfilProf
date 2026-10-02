const express = require('express');
const router = express.Router();
const profesorController = require('../controllers/profesorController');

// Rutas para el recurso "profesor"

// Rutas para el recurso TituloNomenclador
router.get('/titulos', profesorController.getAllTitulosNomenclador);
router.post('/titulos', profesorController.createTituloNomenclador);
router.get('/titulos/:id', profesorController.getTituloNomencladorById);
router.put('/titulos/:id', profesorController.updateTituloNomenclador);
router.delete('/titulos/:id', profesorController.deleteTituloNomenclador);

// trae todos los profesores
router.get('/', profesorController.getAllProfesores);

// crea un nuevo profesor
router.post('/', profesorController.createProfesor);

// trae un profesor por id
router.get('/:id', profesorController.getProfesorById);
router.put('/:id', profesorController.updateProfesor);

// elimina un profesor por id
router.delete('/:id', profesorController.deleteProfesor);

module.exports = router;
