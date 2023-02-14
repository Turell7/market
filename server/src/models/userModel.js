// Определение модели пользователя
const Sequelize = require('sequelize')
const { sequelize } = require('./index')

const UserModel = sequelize.define('user', {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  last_name: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  avatar: {
    type: Sequelize.TEXT,
    defaultValue: 'https://www.seekpng.com/png/detail/514-5147412_default-avatar-icon.png',
  },
  about: {
    type: Sequelize.TEXT,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  refreshToken: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  role: {
    type: Sequelize.STRING,
    defaultValue: 'user',
  },
})

module.exports = { UserModel }
