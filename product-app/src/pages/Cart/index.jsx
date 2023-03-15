/* eslint-disable react/function-component-definition */
/* eslint-disable react/no-unstable-nested-components */

import { useSelector } from 'react-redux'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { api } from '../../../Api'
import { getToken } from '../../tools/utils'
import styles from './styles.module.scss'
import { Loader } from '../../components/Loader/Loader'
import { ProductCard } from '../../components/ProductCard'

export const PRODUCT_CART = ['PRODUCT_CART']
const getProductCart = (cartIds) => PRODUCT_CART.concat(cartIds)

export function Cart() {
  const token = getToken()

  const id = useSelector((store) => store.cart.items)

  const cartProduct = () => api.getProductByIdCart(id.map((el) => el.id))

  const { data, isLoading, isFetching } = useQuery({
    queryKey: getProductCart(id.map((el) => el.id)),
    queryFn: () => cartProduct(id),
    enabled: !!token,
  })

  const dataProduct = data?.map((el) => el.data)

  console.log('****', dataProduct)

  function LoadCardsFn() {
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
          <p>Корзина товаров пуста</p>
          <Link to="/" className={styles.link}><span>На главную</span></Link>
        </div>
      )
    )
  }

  return (
    <div className={styles.cartContainer}>
      <h3>Товары в корзине</h3>
      <div>
        {LoadCardsFn()}
      </div>
    </div>
  )
}
