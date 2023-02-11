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

module.exports = {
  AllUsers, NewUser,
}
