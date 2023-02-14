import { Link } from 'react-router-dom'
import styles from './styles.module.css'

export function Header() {

  return (
    <>
      <div className={styles.containerColor}>
        Блок с городом и ссылками
        <ul className={styles.containerWr}>
          <li><Link className={styles.Link} to='/contacts'>Контакты</Link></li>
          <li><Link className={styles.Link} to='/about'>О компании</Link></li>
          <li><Link className={styles.Link} to='/help'>Помощь</Link></li>
        </ul>
      </div>
      <div className={styles.containerHeader}>
      <div className={styles.containerHeaderProfile}>
        <div>Телефон</div>
        <div>Логотип</div>
        <div>Кнопка профиля и корзина</div>
      </div>
    </div>
    </>
  )
}