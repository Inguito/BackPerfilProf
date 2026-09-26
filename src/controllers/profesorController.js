const { Profesor, TituloNomenclador, Capacitacion, Experiencia, EspacioCurricular } = require('../models');

// GET /api/v1/profesores
exports.getAllProfesores = async (req, res) => 
{
  try 
  {
    const profesores = await Profesor.findAll(
      {
        include: 
        [
          { model: TituloNomenclador, 
            through: { attributes: ['institucionEmisora', 'anoEgreso'] },
            
            // 🔽 ESTA ES LA SENTENCIA A AGREGAR DENTRO DE TituloNomenclador:
            include: 
            [
              { model: EspacioCurricular,
                through: { attributes: ['tipoHabilitacion'] }
              }
            ]
          },
          { model: Capacitacion, as: 'capacitaciones' 
          },
          { model: Experiencia, as: 'experiencias' 
          }
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
