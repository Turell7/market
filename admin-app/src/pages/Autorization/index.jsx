import { useState } from 'react'
import { SignIn } from './SignIn'
import { SignUp } from './SignUp'

export function Authorization() {
  const [auth, setAuth] = useState(true)
  return (
    <div className="hero bg-base-200">

      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">{auth ? 'LogIn' : 'SignUp'}</h1>
          <p className="py-6">{auth ? 'Введите данные для авторизации.' : 'Пожалуйста, зарегистрируйтесь для доступа к магазину собачей еды.'}</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          { auth ? <SignIn change={setAuth} />
            : <SignUp change={setAuth} /> }
        </div>
      </div>
    </div>
  )
}
