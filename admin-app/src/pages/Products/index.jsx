import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { adminApi } from '../../Api'
import { CreateProduct } from '../../components/CreateProduct'
import { Table } from '../../components/Table'
import { PRODUCTS_QUERY_KEY } from '../../tools/queryKeys'

export function Products() {
  const [isAddItem, setIsAddItem] = useState(false)

  const { user } = useSelector((store) => store.user.user)

  const { data, isLoading, isFetching } = useQuery({
    queryKey: PRODUCTS_QUERY_KEY.concat(user),
    queryFn: () => adminApi.getAllProducts(),
  })

  if (isLoading || isFetching) {
    return (
      <div>Loading ...</div>
      // <Box sx={{ width: 640 }}>
      //   <Skeleton sx={{ height: 100 }} animation="wave" />
      //   <Skeleton sx={{ height: 80 }} animation="wave" />
      //   <Skeleton sx={{ height: 80 }} animation="wave" />
      //   <Skeleton variant="text" />
      // </Box>
    )
  }
  const products = data.data
  return (
    <>
      { isAddItem && <CreateProduct />}
      <Table setIsAddItem={setIsAddItem} items={products} />
    </>
  )
}
