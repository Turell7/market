import { ProductCard } from '../../components/ProductCard'
import styles from './styles.module.scss'
import { api } from '../../../Api'
import { useQuery } from '@tanstack/react-query'
import { Loader } from '../../components/Loader/Loader'


export const PRODUCTS_QUERY_KEY = ['PRODUCTS_QUERY_KEY']


export function Catalog() {

  
  const {data, status, isError, isLoading, isFetching} = useQuery({
    queryKey: PRODUCTS_QUERY_KEY,
    queryFn: () => api.getAllProducts(),
  })
  
  
 // console.log(data, status, isError, isLoading, isFetching)

const LoadCardsFn = () => {
  if (isLoading || isFetching) {
    return <Loader />
  } else {
    return  <div className={styles.catalogCardWr}>{data.data.map((el) => (<ProductCard key={el.id} {...el} />))}</div>  
  }
}


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
          {LoadCardsFn()}     
    </div>
  )
}

