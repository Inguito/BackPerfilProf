// Configurar CORS: En app.js / server.js, permite las peticiones desde el dominio 
// donde desplegarás el frontend (Vercel/Netlify):
// const cors = require('cors');
// app.use(cors({
//   origin: process.env.FRONTEND_URL || '*'
// }));

// Antes del deployado, asegúrate de configurar
//  las variables de entorno en tu plataforma 
// de despliegue (Vercel/Netlify) para que coincidan 
// con las que estás usando en tu archivo
//  .env local. 
// Esto incluye la URL de la base de datos y 
// cualquier otra variable sensible.
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const tituloRoutes = require('./routes/tituloRoutes');
const profesorRoutes = require('./routes/profesorRoutes');
const profesorTituloRoutes = require('./routes/profesorTituloRoutes');
const habilitacionRoutes = require('./routes/habilitacionRoutes');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
// cors es una librería que permite controlar 
// el acceso a recursos desde diferentes dominios.

app.use(cors());
app.use(express.json());

// Rutas

app.use('/api/v1/profesores', profesorRoutes);
app.use('/api/v1/titulos', tituloRoutes);
app.use('/api/v1/profesorTitulos', profesorTituloRoutes);
app.use('/api/v1/habilitaciones', habilitacionRoutes);




app.get('/', (req, res) => {
  res.json({ message: 'API RESTful - Sistema Docente y Oferta Curricular Activa' });
});

// Inicialización de Base de Datos y Servidor
sequelize.sync({ alter: true })
  .then(() => {
    console.log(' Base de datos PostgreSQL sincronizada exitosamente.');
    app.listen(PORT, () => {
      console.log(` Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(' Error al conectar con la base de datos:', err);
  });
