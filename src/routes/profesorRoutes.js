const express = require('express');
const router = express.Router();
const profesorController = require('../controllers/profesorController');

// Rutas para el recurso "profesor"
// trae todos los profesores
router.get('/', profesorController.getAllProfesores);
// trae un profesor por id
router.get('/:id', profesorController.getProfesorById);
// crea un nuevo profesor
router.post('/', profesorController.createProfesor);
router.put('/:id', profesorController.updateProfesor);
// elimina un profesor por id
router.delete('/:id', profesorController.deleteProfesor);

// Rutas para el recurso TituloNomenclador
router.get('/titulos', profesorController.getAllTitulosNomenclador);
router.get('/titulos/:id', profesorController.getTituloNomencladorById);
router.post('/titulos', profesorController.createTituloNomenclador);
router.put('/titulos/:id', profesorController.updateTituloNomenclador);
router.delete('/titulos/:id', profesorController.deleteTituloNomenclador);





module.exports = router;
