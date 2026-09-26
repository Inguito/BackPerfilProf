const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Resolucion = sequelize.define('Resolucion', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  numeroResolucion: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
  },
  anoAprobacion: {
    type: DataTypes.INTEGER
  },
  descripcion: {
    type: DataTypes.TEXT
  },
  documentoUrl: {
    type: DataTypes.STRING(255)
  }
}, {
  tableName: 'resoluciones'
});

module.exports = Resolucion;
