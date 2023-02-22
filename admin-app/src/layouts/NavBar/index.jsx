import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import stylesNavBar from './styles.module.scss'
import { useLogOut } from '../../hooks/useLogOut'
// import { ReactComponent as FavoriteIcon } from '../../UI/icons/ic-favorites.svg'
// import { ReactComponent as BasketIcon } from '../../UI/icons/ic-basket.svg'
// import { Auth } from '../../forms/Auth'

export function NavBar() {
  // const { items } = useSelector((store) => store.cart)
  // const productFavoriteIds = useSelector((store) => store.favorite)
  const { logOut } = useLogOut()
  const { user } = useSelector((store) => store.user)

  if (user !== null) {
    return (
      <ul className={`${stylesNavBar.navbar} flex`}>
        <li className="dropdown dropdown-end">
          <button type="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 mask mask-squircle">
              <img src={user.avatar} alt="avatar" />
            </div>
          </button>
          <ul className="menu menu-compact
 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/profile" className="justify-between">
                {user.name}
                <span className="badge badge-secondary">Profile</span>
              </Link>
            </li>
            <li>
              <button onClick={logOut} type="button" className="justify-between">
                Log out
              </button>
            </li>

          </ul>
        </li>
      </ul>
    )
  }
  return (
    <ul>
      <button type="button" className="btn btn-secondary shadow">
        LogIn
      </button>
    </ul>
  )
}
