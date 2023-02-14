import { Outlet } from 'react-router-dom'
import style from './styles.module.css'

export function Main() {
  return (
    <>
      <main className={style.containerMain}>
        Main
        <Outlet />
      </main>
    </>
  )
}