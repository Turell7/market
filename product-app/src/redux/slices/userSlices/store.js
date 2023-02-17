import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import userSlices from "./userSlice/userSlices"

const USER_KEY = ["USER_KEY"]

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});


export const store = configureStore({
  reducer: {
    user: userSlices,
  },
  middleware,
})

store.subscribe(() => {
  const storeState = store.getState()
  const { user } = storeState
  localStorage.setItem(USER_KEY, JSON.stringify(user))
})
