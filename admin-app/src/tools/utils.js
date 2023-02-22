import { USER_STORAGE_KEY } from './storageKeys'

export const getUserToken = () => {
  const userLS = window.localStorage.getItem(USER_STORAGE_KEY)
  if (userLS) return JSON.parse(userLS).token
  return null
}
