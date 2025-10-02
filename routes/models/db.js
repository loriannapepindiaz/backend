require('dotenv').config();
const { Sequelize } = require('sequelize');


const sequelize = new Sequelize(
  process.env.DB_NOMBRE, 
  process.env.DB_USUARIO,
  process.env.DB_CLAVE, {
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
);

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión establecida correctamente a PostgreSQL.');
  } catch (error) {
    console.error('❌ Error en la conexión:', error);
  }
}


testConnection();

module.exports = sequelize;