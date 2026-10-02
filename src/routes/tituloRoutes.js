const express = require('express');
const router = express.Router();
const profesorController = require('../controllers/profesorController');

router.get('/', profesorController.getAllTitulosNomenclador);
router.post('/', profesorController.createTituloNomenclador);
router.get('/:id', profesorController.getTituloNomencladorById);
router.put('/:id', profesorController.updateTituloNomenclador);
router.delete('/:id', profesorController.deleteTituloNomenclador);

module.exports = router;