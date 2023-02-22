import { Outlet } from 'react-router-dom'
import { TopNav } from '../TopNav'
import style from './styles.module.css'

export function Main() {
  return (
    <>
      <TopNav />
      <main className={style.containerMain}>
        <Outlet />
      </main>
    </>
  )
}
