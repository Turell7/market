import styles from './styles.module.scss'

export function TopNav() {
  return (
    <div className={styles.containerCategoty}>
      <div className={styles.container}>
        <div>Бренды</div>
        <div>Женский</div>
        <div>Мужской</div>
        <div>Унисекс</div>
        <div>Контакты</div>
      </div>
    </div>
  )
}
