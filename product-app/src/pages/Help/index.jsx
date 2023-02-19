import { Link } from "react-router-dom"
import styles from './styles.module.scss'

export function Help() {
  return (
    <>
      <h3 className={styles.containerHelp}>Помощь</h3>
      <Link to='/' className={styles.link}>Главная</Link>
    </>
  )
}