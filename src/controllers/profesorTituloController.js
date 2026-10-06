const { Profesor, TituloNomenclador, Capacitacion, Experiencia, 
  EspacioCurricular, ProfesorTitulo } = require('../models');


// GET /api/v1/profesorTitulo
// Trae todos los profesorTitulos
exports.getAllProfesorTitulos = async (req, res) => {
  try {
    const profesorTitulos = await ProfesorTitulo.findAll(
    //   {
    //   include: [
    //     { model: Profesor },
    //     { model: TituloNomenclador }
    //   ]
    // }
    );
    return res.status(200).json({ success: true, data: profesorTitulos });
  } catch (error) { return res.status(500).json({ success: false, message: error.message });
  }
};  

// POST /api/v1/profesorTitulo
// Crea un nuevo profesorTitulo
exports.createProfesorTitulo = async (req, res) => {
  try {
    const { 
      id, 
      profesor_id, 
      titulo_nomenclador_id, 
      institucionEmisora, 
      anoEgreso 
    } = req.body;
    const newProfesorTitulo = await ProfesorTitulo.create({ 
      id,
      profesor_id, 
      titulo_nomenclador_id, 
      institucionEmisora, 
      anoEgreso 
    });
    return res.status(201).json({ success: true, data: newProfesorTitulo });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// GET /api/v1/profesorTitulo/:id
// Trae un profesorTitulo por id
exports.getProfesorTituloById = async (req, res) => {
  try {
    const { id } = req.params;
    const profesorTitulo = await ProfesorTitulo.findByPk(id, {
      include: [
        { model: Profesor },
        { model: TituloNomenclador }
      ]
    });

    if (!profesorTitulo) {
      return res.status(404).json({ success: false, message: 'ProfesorTitulo no encontrado' });
    }

    return res.status(200).json({ success: true, data: profesorTitulo });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};  

// PUT /api/v1/profesorTitulo/:id
// Actualiza un profesorTitulo por id
// exports.updateProfesorTitulo = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { institucionEmisora, anoEgreso } = req.body;

//     const profesorTitulo = await ProfesorTitulo.findByPk(id);
//     if (!profesorTitulo) {
//       return res.status(404).json({ success: false, message: 'ProfesorTitulo no encontrado' });
//     }

//     profesorTitulo.institucionEmisora = institucionEmisora;
//     profesorTitulo.anoEgreso = anoEgreso;
//     await profesorTitulo.save();

//     return res.status(200).json({ success: true, data: profesorTitulo });
//   } catch (error) {
//     return res.status(500).json({ success: false, message: error.message });
//   }
// };

exports.updateProfesorTitulo = async (req, res) => {
  try {
    const { id } = req.params;
    const { 
      profesor_id, 
      titulo_nomenclador_id, 
      institucionEmisora, 
      anoEgreso, 
      tituloAdjuntoUrl 
    } = req.body;

    const registro = await ProfesorTitulo.findByPk(id);
    if (!registro) {
      return res.status(404).json({ success: false, message: 'Registro no encontrado' });
    }

    await registro.update({
      profesor_id,
      titulo_nomenclador_id,
      institucionEmisora,
      anoEgreso,
      tituloAdjuntoUrl
    });

    return res.status(200).json({
      success: true,
      data: registro
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};





// DELETE /api/v1/profesorTitulo/:id
// Elimina un profesorTitulo por id
exports.deleteProfesorTitulo = async (req, res) => {
  try {
    const { id } = req.params;
    const profesorTitulo = await ProfesorTitulo.findByPk(id);
    if (!profesorTitulo) {
      return res.status(404).json({ success: false, message: 'ProfesorTitulo no encontrado' });
    }

    await profesorTitulo.destroy();
    return res.status(200).json({ success: true, message: 'ProfesorTitulo eliminado correctamente' });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};  


  
  
  

    