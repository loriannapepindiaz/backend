// models/Usuario.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db'); 

const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true 
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
