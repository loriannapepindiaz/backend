// models/Usuario.js
const { DataTypes } = require('sequelize');
const sequelize = require('./db'); // db.js está en la misma carpeta

const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true // 👈 esto es clave
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'usuario',
  timestamps: false
});

module.exports = Usuario;
