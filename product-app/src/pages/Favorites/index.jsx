import { useSelector } from 'react-redux'
import { ProductCard } from '../../components/ProductCard'
import styles from './styles.module.scss'

export function Favorites() {
  const data = useSelector((store) => store.favorites.items)

  console.log(data)

  return (
    <div className={styles.favoritesContainer}>
      <div>
        {data ? (
          <>
            <h3>Товары, которые Вам понравились</h3>
            <ProductCard />
          </>
        ) : <h3>Товары не найдены</h3>}
      </div>
    </div>
  )
}
