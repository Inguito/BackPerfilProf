const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Habilitacion = sequelize.define('Habilitacion', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  tipoHabilitacion: {
    type: DataTypes.ENUM('Docente', 'Habilitante', 'Supletorio'),
    defaultValue: 'Docente'
  }
}, {
  tableName: 'habilitaciones'
});

module.exports = Habilitacion;
