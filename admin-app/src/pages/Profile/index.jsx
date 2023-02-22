// import userDefault from '../../assets/userDefault.jpeg'

import { Link } from 'react-router-dom'

export function Profile() {
  return (
    <div className="my-10">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="text-center p-6  border-b">
          <div className="avatar">
            <div className="w-24 mask mask-squircle">
              <img src alt="avatar" />
            </div>
          </div>
          <p className="pt-2 text-lg font-semibold">Name</p>
          <p className="text-sm text-gray-600">email</p>

        </div>
        <div className="border-b">
          <div className="px-4 py-2 hover:bg-gray-100 flex">
            <div className="text-gray-800">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">Status</p>
              <p className="text-xs text-gray-500">About</p>
            </div>
          </div>
        </div>
        <div className="">
          <Link to="/cart" className="px-4 py-2 pb-4 hover:bg-gray-100 flex">
            <p className="text-sm font-medium text-gray-800 leading-none">
              Что-то
              <span className="badge badge-primary badge-md mx-0.5">df</span>
            </p>
          </Link>
          <div className="flex justify-center">
            <button type="button" className="btn btn-wide">
              Log out
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
