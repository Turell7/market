/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { getFavoriteInitialState } from '../../initState'

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: getFavoriteInitialState(),
  reducers: {
    addFavorite(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id)
      if (!findItem) {
        state.items.push({ ...action.payload, favorite: true })
      } else {
        findItem.favorite = false
        state.items = state.items.filter((favorite) => favorite !== findItem)
      }
    },
    removeFavorite(state, action) {
      state.items = state.items.filter((favorite) => favorite !== action.payload)
    },

    clearFavorite(state) {
      state.items = []
    },
  },
})

export const {
  addFavorite, removeFavorite, clearItems,
} = favoriteSlice.actions

export default favoriteSlice.reducer
