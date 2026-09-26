const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Profesor = sequelize.define('Profesor', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  dni: {
    type: DataTypes.STRING(15),
    allowNull: false,
    unique: true
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  telefono: {
    type: DataTypes.STRING(30)
  },
  correoElectronico: {
    type: DataTypes.STRING(150),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  anoEgreso: {
    type: DataTypes.INTEGER
  },
  cvAdjuntoUrl: {
    type: DataTypes.STRING(255)
  },
  dniAdjuntoUrl: {
    type: DataTypes.STRING(255)
  },
  localidadesPostulacion: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    defaultValue: []
  }
}, {
  tableName: 'profesores'
});

module.exports = Profesor;
