import styles from './styles.module.scss'

export function TopNav() {
  return (
    <div className={styles.containerCategoty}>
      <div className={styles.container}>
        <div>Категория1</div>
        <div>Категория2</div>
        <div>Категория3</div>
        <div>Категория4</div>
        <div>Категория5</div>
      </div>
    </div>
  )
}