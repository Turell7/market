/* eslint-disable react/function-component-definition */
/* eslint-disable react/no-unstable-nested-components */
import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { api } from '../../../Api'
import { Loader } from '../../components/Loader/Loader'
import { ProductCard } from '../../components/ProductCard'
import { token } from '../../tools/utils'
import styles from './styles.module.scss'

export const FAVORITES_CARD = ['FAVORITES_CARD']
const getFavoritesCart = (cardIds) => FAVORITES_CARD.concat(cardIds)

export function Favorites() {
  const id = useSelector((store) => store.favorites.items)

  const cardProduct = () => api.getProductByIdCart(id.map((el) => el.id))

  const { data, isLoading, isFetching } = useQuery({
    queryKey: getFavoritesCart(id.map((el) => el.id)),
    queryFn: () => cardProduct(id),
    enabled: !!token,
  })

  const dataProduct = data?.map((el) => el.data)

  const LoadCardsFn = () => {
    if (isLoading || isFetching) {
      return <Loader />
    }
    return (dataProduct.length ? (
      <div className={styles.catalogCardWr}>
        {(dataProduct.map((el) => (
          <ProductCard key={el.id} {...el} />
        )))}
      </div>
    )
      : (
        <div className={styles.page}>
          <p>Избранные товары отсутствуют</p>
          <Link to="/" className={styles.link}><span>На главную</span></Link>
        </div>
      )
    )
  }

  return (
    <div className={styles.favoritesContainer}>
      <h3>Товары, которые Вам понравились</h3>
      <div>
        {LoadCardsFn()}
      </div>
    </div>
  )
}
