import { useQuery } from '@tanstack/react-query'
import { api } from '../../Api'
import { PRODUCTS_QUERY_KEY } from '../../tools/queryKeys'

export function Products() {
  const getProductsQueryKey = () => PRODUCTS_QUERY_KEY
  const getAllProducts = () => api.getAllProducts()

  const { data, isLoading, isFetching } = useQuery({
    queryKey: getProductsQueryKey(),
    queryFn: getAllProducts,
  })

  if (isLoading || isFetching) return <div>Loading ...</div>

  const products = data.data
  return (
    <div>
      <h1>Products</h1>
      {products?.map((product) => (
        <div key={product.id}>
          {product.name}
          <span>
            {' '}
            {product.price}
            р
          </span>
        </div>
      ))}
    </div>
  )
}
