/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { USER_STORAGE_KEY } from '../../tools/storageKeys'

let initialState = { token: null, user: null }
const userLS = window.localStorage.getItem(USER_STORAGE_KEY)
if (userLS) initialState = JSON.parse(userLS)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.token = action.payload.accessToken
      state.user = action.payload
    },
    clearUser: (state) => {
      state.token = null
      state.user = null
    },
  },
})

export const { setUser, clearUser } = userSlice.actions
export const userReducer = userSlice.reducer
