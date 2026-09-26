const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Experiencia = sequelize.define('Experiencia', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  anoInicio: {
    type: DataTypes.INTEGER
  },
  anoFin: {
    type: DataTypes.INTEGER
  },
  proyectosRealizados: {
    type: DataTypes.TEXT
  },
  reconocimientos: {
    type: DataTypes.TEXT
  },
  becas: {
    type: DataTypes.TEXT
  }
}, {
  tableName: 'experiencias'
});

module.exports = Experiencia;
