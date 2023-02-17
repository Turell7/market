import { useDispatch } from 'react-redux'
import { clearUser } from '../store/slices/userSlice/userSlice'

export const useLogOut = () => {
  const dispatch = useDispatch()

  const logOut = () => {
    dispatch(clearUser())
    // dispatch(clearSort())
    // dispatch(clearSearch())
    // dispatch(clearItems())
  }

  return {
    logOut,
  }
}
