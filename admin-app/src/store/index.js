import { configureStore } from '@reduxjs/toolkit'
import { USER_STORAGE_KEY } from '../tools/storageKeys'
import { userReducer } from './slices/userSlice/userSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
})

store.subscribe(() => {
  const storeState = store.getState()
  const { user } = storeState
  window.localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user))
})
