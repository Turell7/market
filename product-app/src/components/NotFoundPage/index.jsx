import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

export function NotFoundPage() {
  return (
    <div className={styles.page}>
      <div className={styles.iWr}>
        <i className="fa-solid fa-magnifying-glass" />
        <p>Страница не найдена</p>
      </div>
      <Link to="/" className={styles.link}><span>На главную</span></Link>
    </div>
  )
}
