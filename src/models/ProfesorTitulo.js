const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ProfesorTitulo = sequelize.define('ProfesorTitulo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  institucionEmisora: {
    type: DataTypes.STRING(150)
  },
  anoEgreso: {
    type: DataTypes.INTEGER
  },
  tituloAdjuntoUrl: {
    type: DataTypes.STRING(255)
  }
}, {
  tableName: 'profesores_titulos'
  timestamps: true,
  underscored: true // Mantiene el naming snake_case para las columnas de BD
});

module.exports = ProfesorTitulo;
