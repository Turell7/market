// Получение всех пользователей -------------------------------------------------------
const AllUsers = async (User) => {
  const users = await User.findAll({ raw: true })
  return users
}

// Добавление нового пользователя-------------------------------------------------------
const NewUser = async (UserModel, newUser) => {
  const newUserFromDB = await UserModel.create({
    id: newUser.id,
    name: newUser.name,
    password: newUser.password,
    about: newUser.about,
    avatar: newUser.avatar,
    email: newUser.email,
    refreshToken: newUser.refreshToken,
  })
  return newUserFromDB
}
// Обновление пользователя по Email-------------------------------------------------------
const UpdateUserByEmail = async (UserModel, userData) => {
  const { email } = userData
  const result = await UserModel.update(userData, {
    where: {
      email: [email],
    },
  })
  return result
}
// Обновление пользователя по ID-------------------------------------------------------
const UpdateUserByID = async (UserModel, userData) => {
  const { id } = userData
  const result = await UserModel.update(userData, {
    where: {
      id: [id],
    },
  })
  return result
}
module.exports = {
  AllUsers, NewUser, UpdateUserByEmail, UpdateUserByID,
}
