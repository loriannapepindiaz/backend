require('dotenv').config();
const { Sequelize } = require('sequelize');


const sequelize = new Sequelize(
  process.env.DB_URL, {
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