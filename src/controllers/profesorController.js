const { Profesor, TituloNomenclador, Capacitacion, Experiencia, EspacioCurricular, Habilitacion } = require('../models');

// GET /api/v1/profesores
exports.getAllProfesores = async (req, res) => 
{
  try 
  {
   const profesores = await Profesor.findAll({
  include: [
    { 
      model: TituloNomenclador, 
      through: { attributes: ['profesor_id', 'titulo_nomenclador_id', 'institucionEmisora', 'anoEgreso'] },
      include: [
        {
          model: EspacioCurricular,
          // 🔽 ESTO ES LO QUE LLENA EL OBJETO Habilitacion EN EL JSON:
          through: { 
            model: Habilitacion,
            attributes: ['titulo_nomenclador_id', 'espacio_curricular_id', 'tipoHabilitacion'] }
        }
      ]
    },
    { model: Capacitacion, as: 'capacitaciones' },
    { model: Experiencia, as: 'experiencias' }
  ]
});
    return res.status(200).json({ success: true, data: profesores });
  } catch (error) 
  {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// GET /api/v1/profesores/:id
exports.getProfesorById = async (req, res) => {
  try {
    const { id } = req.params;
    const profesor = await Profesor.findByPk(id, {
      include: [
        { model: TituloNomenclador, through: { attributes: ['institucionEmisora', 'anoEgreso'] } },
        { model: Capacitacion, as: 'capacitaciones' },
        { model: Experiencia, as: 'experiencias' }
      ]
    });

    if (!profesor) {
      return res.status(404).json({ success: false, message: 'Profesor no encontrado' });
    }

    return res.status(200).json({ success: true, data: profesor });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// POST /api/v1/profesores
exports.createProfesor = async (req, res) => {
  try {
    const {
      dni,
      nombre,
      apellido,
      telefono,
      correoElectronico,
      anoEgreso,
      cvAdjuntoUrl,
      dniAdjuntoUrl,
      localidadesPostulacion
    } = req.body;

    const nuevoProfesor = await Profesor.create({
      dni,
      nombre,
      apellido,
      telefono,
      correoElectronico,
      anoEgreso,
      cvAdjuntoUrl,
      dniAdjuntoUrl,
      localidadesPostulacion
    });

    return res.status(201).json({ success: true, data: nuevoProfesor });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

// PUT /api/v1/profesores/:id
exports.updateProfesor = async (req, res) => {
  try {
    const { id } = req.params;
    const profesor = await Profesor.findByPk(id);

    if (!profesor) {
      return res.status(404).json({ success: false, message: 'Profesor no encontrado' });
    }

    await profesor.update(req.body);
    return res.status(200).json({ success: true, data: profesor });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

// DELETE /api/v1/profesores/:id
exports.deleteProfesor = async (req, res) => {
  try {
    const { id } = req.params;
    const profesor = await Profesor.findByPk(id);

    if (!profesor) {
      return res.status(404).json({ success: false, message: 'Profesor no encontrado' });
    }

    await profesor.destroy();
    return res.status(200).json({ success: true, message: 'Profesor eliminado correctamente' });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Para las rutas de TituloNomenclador, 
// puedes agregar funciones similares a las anteriores
//  para manejar la creación, actualización, 
// eliminación y obtención de títulos. 
// Aquí hay un ejemplo de cómo podrías estructurarlas:
// GET /api/v1/profesores/titulos 
exports.getAllTitulosNomenclador = async (req, res) => {
  try {
    const titulos = await TituloNomenclador.findAll();
    return res.status(200).json({ success: true, data: titulos });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// GET /api/v1/profesores/titulos/:id
exports.getTituloNomencladorById = async (req, res) => {
  try {
    const { id } = req.params;
    const titulo = await TituloNomenclador.findByPk(id);

    if (!titulo) {
      return res.status(404).json({ success: false, message: 'Título no encontrado' });
    }

    return res.status(200).json({ success: true, data: titulo });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};  

// POST /api/v1/profesores/titulos
exports.createTituloNomenclador = async (req, res) => {
  try {
    const { codigo, nombreTitulo, nivelEducativo, incumbenciaGeneral } = req.body;
    const nuevoTitulo = await TituloNomenclador.create({
      codigo,
      nombreTitulo,
      nivelEducativo,
      incumbenciaGeneral
    });

    return res.status(201).json({ success: true, data: nuevoTitulo });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

// PUT /api/v1/titulos/:id   

exports.updateTituloNomenclador = async (req, res) => {
  try {
    const { id } = req.params;
    const titulo = await TituloNomenclador.findByPk(id);

    if (!titulo) {
      return res.status(404).json({ success: false, message: 'Título no encontrado' });
    }

    await titulo.update(req.body);
    return res.status(200).json({ success: true, data: titulo });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

// // Unicamente para actualizar el ID de un TituloNomenclador
// exports.updateTituloNomenclador = async (req, res) => {
//   try {
//     const { id } = req.params;          // ID actual (ej: /titulos/1)
//     const { nuevoId } = req.body;        // Nuevo ID deseado (ej: { "nuevoId": 5 })

//     if (!nuevoId) {
//       return res.status(400).json({ 
//         success: false, 
//         message: 'Debe proporcionar el nuevoId en el cuerpo de la solicitud' 
//       });
//     }

//     // Buscar si existe el título a modificar
//     const titulo = await TituloNomenclador.findByPk(id);
//     if (!titulo) {
//       return res.status(404).json({ success: false, message: 'Título no encontrado' });
//     }

//     // Verificar que el nuevo ID no esté ocupado
//     const existeId = await TituloNomenclador.findByPk(nuevoId);
//     if (existeId) {
//       return res.status(400).json({ 
//         success: false, 
//         message: `El ID ${nuevoId} ya está en uso por otro registro.` 
//       });
//     }

//     // Actualizar el ID directamente en la base de datos
//     await TituloNomenclador.update(
//       { id: nuevoId },
//       { where: { id } }
//     );

//     // Obtener el registro actualizado con el nuevo ID
//     const tituloActualizado = await TituloNomenclador.findByPk(nuevoId);

//     return res.status(200).json({ success: true, data: tituloActualizado });
//   } catch (error) {
//     return res.status(400).json({ success: false, message: error.message });
//   }
// };



// DELETE /api/v1/profesores/titulos/:id
exports.deleteTituloNomenclador = async (req, res) => {
  try {
    const { id } = req.params;
    const titulo = await TituloNomenclador.findByPk(id);

    if (!titulo) {
      return res.status(404).json({ success: false, message: 'Título no encontrado' });
    }
    await titulo.destroy();
   return res.status(200).json({ success: true, message: 'Título eliminado correctamente' });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};


    