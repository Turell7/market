const { Sequelize } = require('sequelize')

const userDBService = async () => {
  const sequelize = new Sequelize(`${process.env.DB_NAME}`, `${process.env.DB_USERNAME}`, `${process.env.DB_PASSWORD}`, {
    host: '13.37.52.101',
    dialect: 'mysql',
  })
  await sequelize.authenticate()

  // Определение модели пользователя
  const User = sequelize.define('user', {
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
      allowNull: false,
    },
    about: {
      type: Sequelize.STRING,
      allowNull: false,
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
  // Синхронизация с базой данных
  sequelize.sync().then((result) => {
    console.log(result)
    // sequelize.close()
  })
    .catch((err) => {
      console.log(err)
      // sequelize.close()
    })
  return User
}
module.exports = { userDBService }
