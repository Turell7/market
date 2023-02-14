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
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  avatar: {
    type: Sequelize.STRING,
    defaultValue: 'picture',
  },
  about: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  refreshToken: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})

module.exports = { UserModel }
