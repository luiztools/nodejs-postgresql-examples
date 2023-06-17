const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres@localhost:5432/crud', { dialect: 'postgres' });

module.exports = sequelize;