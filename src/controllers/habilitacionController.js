const { Profesor, TituloNomenclador, Capacitacion, Experiencia, 
  EspacioCurricular, Habilitacion } = require('../models');

// Trae todas las habilitaciones
// GET /api/v1/habilitaciones
exports.getAllHabilitaciones = async (req, res) => {
  try {
    const habilitaciones = await Habilitacion.findAll(
    //   {
    //   include: [
    //     { model: TituloNomenclador },
    //     { model: EspacioCurricular }
    //   ]
    // }
  );
    return res.status(200).json({ success: true, data: habilitaciones });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}
// Crea una nueva habilitacion
// POST /api/v1/habilitaciones

exports.createHabilitacion = async (req, res) => {
  try {
    const { 
      titulo_nomenclador_id, 
      espacio_curricular_id, 
      tipoHabilitacion 
    } = req.body;
    const newHabilitacion = await Habilitacion.create({ 
      titulo_nomenclador_id, 
      espacio_curricular_id, 
      tipoHabilitacion 
    });
    return res.status(201).json({ success: true, 
      data: newHabilitacion });
  }
  catch (error) {
    return res.status(500).json({ success: false, 
      message: error.message });
  }
}

// Trae una habilitacion por id
// GET /api/v1/habilitaciones/:id
exports.getHabilitacionById = async (req, res) => {
  try {
    const { id } = req.params;
    const habilitacion = await Habilitacion.findByPk(id);
    if (!habilitacion) {
      return res.status(404).json({ success: false, message: 'Habilitación no encontrada' });
    }
    return res.status(200).json({ success: true, data: habilitacion });
  }

  catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}


  // Actualiza una habilitacion por id
  // PUT /api/v1/habilitaciones/:id
exports.updateHabilitacion = async (req, res) => {
    try {
      const { id } = req.params;
      const { titulo_nomenclador_id, espacio_curricular_id, tipoHabilitacion } = req.body;
      const habilitacion = await Habilitacion.findByPk(id);
      if (!habilitacion) {
        return res.status(404).json({ success: false, message: 'Habilitación no encontrada' });
      }
      habilitacion.titulo_nomenclador_id = titulo_nomenclador_id;
      habilitacion.espacio_curricular_id = espacio_curricular_id;
      habilitacion.tipoHabilitacion = tipoHabilitacion;
      await habilitacion.save();
      return res.status(200).json({ success: true, data: habilitacion });

    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  }
  
  // Elimina una habilitacion por id

  // DELETE /api/v1/habilitaciones/:id

  exports.deleteHabilitacion = async (req, res) => {
    try {
      const { id } = req.params;
      const habilitacion = await Habilitacion.findByPk(id);

      if (!habilitacion) {
        return res.status(404).json({ success: false, message: 'Habilitación no encontrada' });
      }
        await habilitacion.destroy();
      return res.status(200).json({ success: true, message: 'Habilitación eliminada exitosamente' });
    }
    catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  }

  