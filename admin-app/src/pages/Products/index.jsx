import { Box, Skeleton } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { api } from '../../Api'
import { TableProducts } from '../../components/TableProducts'
import { PRODUCTS_QUERY_KEY } from '../../tools/queryKeys'
// import { SkeletonTab } from '../../UIs/loaders/SkeletonTab'

export function Products() {
  const getProductsQueryKey = () => PRODUCTS_QUERY_KEY
  const getAllProducts = () => api.getAllProducts()

  const { data, isLoading, isFetching } = useQuery({
    queryKey: getProductsQueryKey(),
    queryFn: getAllProducts,
  })

  if (isLoading || isFetching) {
    return (
      <Box sx={{ width: 640 }}>
        <Skeleton sx={{ height: 100 }} />
        <Skeleton sx={{ height: 80 }} />
        <Skeleton sx={{ height: 80 }} />
        <Skeleton sx={{ height: 80 }} />
        <Skeleton sx={{ height: 80 }} />
        <Skeleton sx={{ height: 80 }} />
        <Skeleton variant="text" />
      </Box>
    )
  }

  const products = data.data
  return (
    <TableProducts products={products} />
  )
}
