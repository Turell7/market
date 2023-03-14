export const USER_KEY = ['USER_KEY']
export const FAVORITE_KEY = ['FAVORITE_KEY']
export const CART_KEY = ['CART_KEY']

export const initialState = {
  token: '',
  items: [],
  cart: {
    totalPrice: 0,
    items: [],
  },
}

export const getUserInitialState = () => {
  const stateLS = localStorage.getItem(USER_KEY)

  return stateLS ? JSON.parse(stateLS) : initialState.token
}

export const getFavoriteInitialState = () => {
  const stateLS = localStorage.getItem(FAVORITE_KEY)

  return stateLS ? JSON.parse(stateLS) : initialState.items
}

export const getCartInitialState = () => {
  const stateLS = localStorage.getItem(CART_KEY)

  return stateLS ? JSON.parse(stateLS) : initialState.cart
}
