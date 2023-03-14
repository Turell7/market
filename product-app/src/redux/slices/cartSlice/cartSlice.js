/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import { createSlice } from '@reduxjs/toolkit'
import { getCartInitialState } from '../../initState'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: getCartInitialState(),
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id)
      if (findItem) {
        findItem.count++
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        })
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        if (obj.discount) {
          const priceCart = obj.price - ((obj.price / obj.discount))
          return (priceCart * obj.count) + sum
        }
        return (obj.price * obj.count) + sum
      }, 0)
    },

    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id)
      findItem.count--
      state.totalPrice = state.items.reduce((sum, obj) => {
        if (obj.discount) {
          const priceCart = obj.price - ((obj.price / obj.discount))
          return (priceCart * obj.count) + sum
        }
        return (obj.price * obj.count) + sum
      }, 0)
    },

    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload)
      state.totalPrice = state.items.reduce((sum, obj) => {
        if (obj.discount) {
          const priceCart = obj.price - ((obj.price / obj.discount))
          return (priceCart * obj.count) + sum
        }
        return (obj.price * obj.count) + sum
      }, 0)
    },

    clearItems(state) {
      state.items = []
      state.totalPrice = 0
    },
  },
})

export const {
  addItem, removeItem, minusItem, clearItems,
} = cartSlice.actions

export default cartSlice.reducer
