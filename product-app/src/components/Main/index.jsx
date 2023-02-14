import { Outlet } from 'react-router-dom'
import { TopNav } from '../../layouts/TopNav'
import style from './styles.module.css'

export function Main() {
  return (
    <>
      <main className={style.containerMain}>
        <TopNav />
        <Outlet />
        Main
      </main>
    </>
  )
}