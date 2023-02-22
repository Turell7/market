import { useDispatch } from 'react-redux'
import { clearUser } from '../store/slices/userSlice'

export const useLogOut = () => {
  const dispatch = useDispatch()

  const logOut = () => {
    dispatch(clearUser())
  }

  return {
    logOut,
  }
}
