import { Outlet } from 'react-router-dom'
import style from './styles.module.css'

export function Main() {
  return (
    <>
      <h3 className={style.containerMain}>Main</h3>
      <Outlet />
    </>
  )
}