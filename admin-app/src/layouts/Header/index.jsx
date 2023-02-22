// import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="bg-secondary p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">

          <div className="drawer-content flex flex-col items-center justify-center">
            {/* <!-- Page content here --> */}
            <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
            </label>

          </div>
          <div>Test</div>
          <button type="button" className="btn">Button</button>
          {/* <Logo />
          <NavBar /> */}
        </div>
      </div>
    </header>

  )
}
