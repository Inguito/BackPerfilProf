const express = require('express');
const router = express.Router();
const tituloController = require('../controllers/tituloController');

router.get('/', tituloController.getAllTitulosNomenclador);
router.post('/', tituloController.createTituloNomenclador);
router.get('/:id', tituloController.getTituloNomencladorById);
router.put('/:id', tituloController.updateTituloNomenclador);
router.delete('/:id', tituloController.deleteTituloNomenclador);

module.exports = router;