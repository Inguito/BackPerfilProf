// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');

// const Habilitacion = sequelize.define('Habilitacion', {
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true
//   },
//   tipoHabilitacion: {
//     type: DataTypes.ENUM('Docente', 'Habilitante', 'Supletorio'),
//     defaultValue: 'Docente'
//   }
// }, {
//   tableName: 'habilitaciones'
// });

// module.exports = Habilitacion;
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Habilitacion = sequelize.define('Habilitacion', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo_nomenclador_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  espacio_curricular_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  tipoHabilitacion: {
    type: DataTypes.STRING,
    allowNull: false,
    // field: 'tipo_habilitacion' // Asegúrate de que coincida con el nombre en tu base de datos (snake_case)
    field: 'tipoHabilitacion' // Asegúrate de que coincida con el nombre en tu base de datos (snake_case)
  }
}, {
  tableName: 'habilitaciones',
  timestamps: true,
  underscored: true
});

module.exports = Habilitacion;