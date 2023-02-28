/* eslint-disable import/no-named-as-default */
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice/cartSlice'
import favorteSlice from './slices/favoriteSlice/favorteSlice'
<<<<<<< HEAD
import userSlices from './slices/userSlices/userSlice/userSlices'
=======
import userSlices from './slices/userSlices/userSlices'
>>>>>>> dev

const USER_KEY = ['USER_KEY']
const FAVORITE_KEY = ['FAVORITE_KEY']
const CART_KEY = ['CART_KEY']

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
})

export const store = configureStore({
  reducer: {
    user: userSlices,
    favorites: favorteSlice,
    cart: cartSlice,
  },
  middleware,
})

store.subscribe(() => {
  const storeState = store.getState()
  const { user, favorite, cart } = storeState
  localStorage.setItem(USER_KEY, JSON.stringify(user))
  localStorage.setItem(FAVORITE_KEY, JSON.stringify(favorite))
  localStorage.setItem(CART_KEY, JSON.stringify(cart))
})
