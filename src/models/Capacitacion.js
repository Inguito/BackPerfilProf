const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Capacitacion = sequelize.define('Capacitacion', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombreCurso: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  certificadoUrl: {
    type: DataTypes.STRING(255)
  }
}, {
  tableName: 'capacitaciones'
});

module.exports = Capacitacion;
