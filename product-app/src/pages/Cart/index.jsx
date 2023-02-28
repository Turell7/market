import { useSelector } from 'react-redux'
import { useQuery } from '@tanstack/react-query'
import { api } from '../../../Api'
import { token } from '../../tools/utils'

export const PRODUCT_CART = ['PRODUCT_CART']
const getProductCart = (cartIds) => PRODUCT_CART.concat(cartIds)

export function Cart() {
  const id = useSelector((store) => store.cart.items)
  // console.log(id)
  const cartProduct = () => api.getProductByIdCart(id.map((el) => el.id))

  const { data } = useQuery({
    queryKey: getProductCart(id.map((el) => el.id)),
    queryFn: () => cartProduct(id),
    enabled: !!token,
  })

  const dataProduct = data?.map((el) => el.id)

  console.log(dataProduct)

  return (
    <h3>Товары</h3>
    // {data.map((el) => <div>{el.name}</div>)}
  )
}
