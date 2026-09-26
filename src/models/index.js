const sequelize = require('../config/database');
const Profesor = require('./Profesor');
const TituloNomenclador = require('./TituloNomenclador');
const ProfesorTitulo = require('./ProfesorTitulo');
const Resolucion = require('./Resolucion');
const Carrera = require('./Carrera');
const EspacioCurricular = require('./EspacioCurricular');
const Habilitacion = require('./Habilitacion');
const Capacitacion = require('./Capacitacion');
const Experiencia = require('./Experiencia');

// Relación N:M entre Profesor y TituloNomenclador mediante ProfesorTitulo
Profesor.belongsToMany(TituloNomenclador, { through: ProfesorTitulo, foreignKey: 'profesor_id' });
TituloNomenclador.belongsToMany(Profesor, { through: ProfesorTitulo, foreignKey: 'titulo_nomenclador_id' });

// Relación 1:N Carrera y Resolucion
Resolucion.hasMany(Carrera, { foreignKey: 'resolucion_id' });
Carrera.belongsTo(Resolucion, { foreignKey: 'resolucion_id' });

// Relación 1:N Carrera y EspacioCurricular (Caja Curricular)
Carrera.hasMany(EspacioCurricular, { foreignKey: 'carrera_id', as: 'cajaCurricular' });
EspacioCurricular.belongsTo(Carrera, { foreignKey: 'carrera_id' });

// Relación N:M entre TituloNomenclador y EspacioCurricular mediante Habilitacion
TituloNomenclador.belongsToMany(EspacioCurricular, { through: Habilitacion, foreignKey: 'titulo_nomenclador_id' });
EspacioCurricular.belongsToMany(TituloNomenclador, { through: Habilitacion, foreignKey: 'espacio_curricular_id' });

// Relaciones auxiliares del Profesor
Profesor.hasMany(Capacitacion, { foreignKey: 'profesor_id', as: 'capacitaciones' });
Capacitacion.belongsTo(Profesor, { foreignKey: 'profesor_id' });

EspacioCurricular.hasMany(Capacitacion, { foreignKey: 'espacio_curricular_id' });
Capacitacion.belongsTo(EspacioCurricular, { foreignKey: 'espacio_curricular_id' });

Profesor.hasMany(Experiencia, { foreignKey: 'profesor_id', as: 'experiencias' });
Experiencia.belongsTo(Profesor, { foreignKey: 'profesor_id' });

module.exports = {
  sequelize,
  Profesor,
  TituloNomenclador,
  ProfesorTitulo,
  Resolucion,
  Carrera,
  EspacioCurricular,
  Habilitacion,
  Capacitacion,
  Experiencia
};
