/* eslint-disable import/no-named-as-default */
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { CART_KEY, FAVORITE_KEY, USER_KEY } from './initState'
import cartSlice from './slices/cartSlice/cartSlice'
import favoriteSlice from './slices/favoriteSlice/favorteSlice'
import userSlices from './slices/userSlices/userSlices'

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
