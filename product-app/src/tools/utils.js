export const token = () => {
  const userToken = localStorage.getItem('USER_KEY')
  if (userToken) return JSON.parse(userToken).token
  return null
}
