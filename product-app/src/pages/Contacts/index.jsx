import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

export function Contacts() {
  return (
    <>
      <h3 className={styles.containerContacts}>Контакты</h3>

      <div className={styles.page}>
        <p>Страница в разработке</p>
      <Link to='/' className={styles.link}><span>На главную</span></Link>
      </div>

    </>
  )
}
