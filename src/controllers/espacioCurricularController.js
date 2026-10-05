const { Profesor, TituloNomenclador, Capacitacion, Experiencia, 
  EspacioCurricular, Habilitacion } = require('../models');

// Trae todas los espacios curriculares
// GET /api/v1/espaciosCurriculares
exports.getAllEspaciosCurriculares = async (req, res) => {
  try {
    const espaciosCurriculares = await EspacioCurricular.findAll();
    return res.status(200).json({ success: true, data: espaciosCurriculares });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}
// Crea un nuevo espacio curricular
// POST /api/v1/espaciosCurriculares
exports.createEspacioCurricular = async (req, res) => { 
  try {
    const { 
      id,
      codigoAsignatura, 
      nombreEspacio,
      anoCursado,
      regimen,
      cargaHorariaSemanal,
      cargaHorariaTotal
    } = req.body;
    const newEspacioCurricular = await EspacioCurricular.create({ 
      id,
      codigoAsignatura,
      nombreEspacio,
      anoCursado,
      regimen,
      cargaHorariaSemanal,
      cargaHorariaTotal
    });
    return res.status(201).json({ success: true, 
      data: newEspacioCurricular });
  }
  catch (error) {
    return res.status(500).json({ success: false, 
      message: error.message });
  }
}

// Trae un espacio curricular por id
// GET /api/v1/espaciosCurriculares/:id
exports.getEspacioCurricularById = async (req, res) => {
  try {
    const { id } = req.params;
    const espacioCurricular = await EspacioCurricular.findByPk(id);
    if (!espacioCurricular) {
      return res.status(404).json({ success: false, message: 'Espacio Curricular no encontrado' });
    }
    return res.status(200).json({ success: true, data: espacioCurricular });
  }

  catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
} 

// Actualiza un espacio curricular por id
// PUT /api/v1/espaciosCurriculares/:id
exports.updateEspacioCurricular = async (req, res) => {
  try {
    const { id } = req.params;
    const { 
      codigoAsignatura, 
      nombreEspacio,
      anoCursado, 
      regimen,
      cargaHorariaSemanal,
      cargaHorariaTotal
    } = req.body;
    const espacioCurricular = await EspacioCurricular.findByPk(id);
    if (!espacioCurricular) {
      return res.status(404).json({ success: false, message: 'Espacio Curricular no encontrado' });
    }
    await espacioCurricular.update({ 
      codigoAsignatura,
      nombreEspacio,
      anoCursado,
      regimen,
      cargaHorariaSemanal,  
      cargaHorariaTotal
    });
    return res.status(200).json({ success: true, data: espacioCurricular });
  }
  catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
} 

// Elimina un espacio curricular por id
// DELETE /api/v1/espaciosCurriculares/:id
exports.deleteEspacioCurricular = async (req, res) => {
  try {
    const { id } = req.params;
    const espacioCurricular = await EspacioCurricular.findByPk(id);
    if (!espacioCurricular) {
      return res.status(404).json({ success: false, message: 'Espacio Curricular no encontrado' });
    }
    await espacioCurricular.destroy();
    return res.status(200).json({ success: true, message: 'Espacio Curricular eliminado correctamente' });
  }
  catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
} 


