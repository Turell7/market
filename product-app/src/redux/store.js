/* eslint-disable import/no-named-as-default */
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice/cartSlice'
import favoriteSlice from './slices/favoriteSlice/favorteSlice'
import userSlices from './slices/userSlices/userSlices'

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
    favorites: favoriteSlice,
    cart: cartSlice,
  },
  middleware,
})

store.subscribe(() => {
  const storeState = store.getState()
  const { user, favorites, cart } = storeState
  localStorage.setItem(USER_KEY, JSON.stringify(user))
  localStorage.setItem(FAVORITE_KEY, JSON.stringify(favorites))
  localStorage.setItem(CART_KEY, JSON.stringify(cart))
})
