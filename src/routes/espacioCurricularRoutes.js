const express = require('express');
const router = express.Router();
const espacioCurricularController = require('../controllers/espacioCurricularController');

// Rutas para el recurso "espacioCurricular"

// trae todos los espacios curriculares 
router.get('/', espacioCurricularController.getAllEspaciosCurriculares);

// crea un nuevo espacio curricular
router.post('/', espacioCurricularController.createEspacioCurricular);

// trae un espacio curricular por id
router.get('/:id', espacioCurricularController.getEspacioCurricularById);

// actualiza un espacio curricular por id
router.put('/:id', espacioCurricularController.updateEspacioCurricular);

// elimina un espacio curricular por id
router.delete('/:id', espacioCurricularController.deleteEspacioCurricular);

module.exports = router;
