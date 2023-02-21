import { ProductCard } from '../../components/ProductCard'
import styles from './styles.module.scss'

export function Catalog() {
  const DataProducts = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <div className={styles.catalogWr}>
      <div className={styles.heading}>
        <h2>Каталог</h2>
      </div>
      <div className={styles.buttonNavgWr}>
        <button type="button">НОВИНКИ</button>
        <button type="button">ХИТ СЕЗОНА</button>
        <button type="button">ПОПУЛЯРНОЕ</button>
      </div>
      <div className={styles.catalogCardWr}>
        {DataProducts.map((el) => (<ProductCard key={crypto.randomUUID()} {...el} />))}
      </div>
    </div>
  )
}
