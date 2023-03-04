export function getToken() {
  const userToken = localStorage.getItem('USER_KEY')
  // if (userToken) {
  //   return JSON.parse(userToken).token
  // }
  return userToken
}
