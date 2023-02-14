import { Outlet } from 'react-router-dom'
import { Home } from '../../pages/Home'
import { TopNav } from '../TopNav'
import style from './styles.module.css'

export function Main() {
  return (
    <>
      <TopNav />
      <main className={style.containerMain}>
        <Outlet />
        <Home />
      </main>
    </>
  )
}