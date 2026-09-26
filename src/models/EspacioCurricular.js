const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const EspacioCurricular = sequelize.define('EspacioCurricular', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  codigoAsignatura: {
    type: DataTypes.STRING(20)
  },
  nombreEspacio: {
    type: DataTypes.STRING(150),
    allowNull: false
  },
  anoCursado: {
    type: DataTypes.INTEGER
  },
  regimen: {
    type: DataTypes.STRING(30)
  },
  cargaHorariaSemanal: {
    type: DataTypes.INTEGER
  },
  cargaHorariaTotal: {
    type: DataTypes.INTEGER
  }
}, {
  tableName: 'espacios_curriculares'
});

module.exports = EspacioCurricular;
