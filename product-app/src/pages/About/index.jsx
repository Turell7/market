import { Link } from "react-router-dom"
import styles from './styles.module.scss'

export function About() {
  return (
      <>
      <h3 className={styles.containerAbout}>О компании</h3>
      <Link to='/' className={styles.link}>Главная</Link>
    </>
  )
}