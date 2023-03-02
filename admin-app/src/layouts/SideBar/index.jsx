import { NavLink } from 'react-router-dom'

export function SideBar() {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay" />
      <ul className="menu p-4 w-60 bg-base-100 text-base-content">
        {/* <!-- Sidebar content here --> */}
        <li>
          <NavLink to="/profile" className="list-group-item list-group-item-action">
            <span>Profile</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" className="list-group-item list-group-item-action">
            <span>Users</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className="list-group-item list-group-item-action">
            <span>Products</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/categories" className="list-group-item list-group-item-action">
            <span>Сategories</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/test-uploads-files" className="list-group-item list-group-item-action">
            <span>Test uploads files</span>
          </NavLink>
        </li>
      </ul>

    </div>
  )
}
