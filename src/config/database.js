const { Sequelize } = require('sequelize');
require('dotenv').config();

// En Render, la conexión suele pasarse en una única URL (DATABASE_URL)
const isProduction = process.env.NODE_ENV === 'production';

const sequelize = process.env.DATABASE_URL
  ? new Sequelize(process.env.DATABASE_URL, {
      dialect: 'postgres',
      protocol: 'postgres',
      dialectOptions: {
        ssl: isProduction
          ? {
              require: true,
              rejectUnauthorized: false // Requerido para conexiones TLS/SSL en Render
            }
          : false
      },
      logging: false
    })
  : new Sequelize(
      process.env.DB_NAME || 'sistema_docente_db',
      process.env.DB_USER || 'postgres',
      process.env.DB_PASSWORD || '1234',
      {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        dialect: 'postgres',
        logging: false
      }
    );

module.exports = sequelize;
