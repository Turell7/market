import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

export function Contacts() {
  return (
    <>
      <h3 className={styles.containerContacts}>Контакты</h3>
      <Link to='/'>Главная</Link>
    </>
  )
}