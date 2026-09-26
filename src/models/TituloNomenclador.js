const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TituloNomenclador = sequelize.define('TituloNomenclador', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  codigo: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true
  },
  nombreTitulo: {
    type: DataTypes.STRING(150),
    allowNull: false
  },
  nivelEducativo: {
    type: DataTypes.STRING(50)
  },
  incumbenciaGeneral: {
    type: DataTypes.TEXT
  }
}, {
  tableName: 'titulos_nomenclador'
});

module.exports = TituloNomenclador;
