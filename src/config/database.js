// Bloque de producción...
// production: {
//   use_env_variable: 'DATABASE_URL',
//   dialect; 'postgres',
//   dialectOptions; {
//     ssl: {
//       require: true,
//       rejectUnauthorized; false
//     }
//   }
// }


const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME || 'sistema_docente_db',
  process.env.DB_USER || 'postgres',
  process.env.DB_PASSWORD || 'postgres',
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    logging: false,
    define: {
      timestamps: true,
      underscored: true
    }
  }
);

module.exports = sequelize;
