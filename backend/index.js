require('dotenv').config();
const express = require('express');
const app = express();
const { sequelize } = require('./models');
const routes = require('./routes');
const cors = require('cors');

const PORT = process.env.BACKEND_PORT || 3001;

app.use(cors())
app.use(express.json());
app.use('/api', routes);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión establecida con la base de datos');

    await sequelize.sync({ alter: true });

    app.listen(PORT, () => {
      console.log(`Servidor escuchando en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
  }
})();
