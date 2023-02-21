import { ProductCard } from '../../components/ProductCard'
import styles from './styles.module.scss'
import { api } from '../../../Api'
import { useQuery } from '@tanstack/react-query'


export const PRODUCTS_QUERY_KEY = ['PRODUCTS_QUERY_KEY']


export function Catalog() {

  
  const {data, status, isError, isLoading, isFetching} = useQuery({
    queryKey: PRODUCTS_QUERY_KEY,
    queryFn: () => api.getAllProducts(),
  })
  
  
  console.log(data, status, isError, isLoading, isFetching)
  
  const DataProducts = [1, 2, 3, 4]

  return (
      <div className={styles.catalogWr}>
          <div className={styles.heading}>
            <h2>Каталог</h2>
          </div>
          <div className={styles.buttonNavgWr}>
            <button>НОВИНКИ</button>
            <button>ХИТ СЕЗОНА</button>
            <button>ПОПУЛЯРНОЕ</button>
          </div>
          <div className={styles.catalogCardWr}>
          {DataProducts.map((el) => (<ProductCard key={crypto.randomUUID()} {...el} />))}
          </div>          
    </div>
  )
}

