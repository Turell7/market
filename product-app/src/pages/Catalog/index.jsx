/* eslint-disable react/function-component-definition */
/* eslint-disable react/no-unstable-nested-components */
import { useQuery } from '@tanstack/react-query'
import { ProductCard } from '../../components/ProductCard'
import styles from './styles.module.scss'
import { api } from '../../../Api'
import { Loader } from '../../components/Loader/Loader'

export const PRODUCTS_QUERY_KEY = ['PRODUCTS_QUERY_KEY']

export function Catalog() {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: PRODUCTS_QUERY_KEY,
    queryFn: () => api.getAllProducts(),
  })

  const LoadCardsFn = () => {
    if (isLoading || isFetching) {
      return <Loader />
    }
    return (
      <div className={styles.catalogCardWr}>
        {data.data.map((el) => (<ProductCard key={el.id} {...el} />))}
      </div>
    )
  }

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
      {LoadCardsFn()}
    </div>
  )
}
