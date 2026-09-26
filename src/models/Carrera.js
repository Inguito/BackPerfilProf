const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Carrera = sequelize.define('Carrera', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(150),
    allowNull: false
  },
  nivel: {
    type: DataTypes.STRING(50)
  },
  duracionAnos: {
    type: DataTypes.INTEGER
  },
  estado: {
    type: DataTypes.STRING(20),
    defaultValue: 'Activa'
  }
}, {
  tableName: 'carreras'
});

module.exports = Carrera;
