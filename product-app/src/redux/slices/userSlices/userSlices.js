/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { getUserInitialState } from '../../initState'

export const userSlice = createSlice({
  name: 'user',
  initialState: getUserInitialState(),
  reducers: {
    addUser(state, action) {
      state.token = action.payload
    },
    clearUser: (state) => {
      state.token = ''
    },
  },
})

export const { addUser, clearUser } = userSlice.actions

export default userSlice.reducer
