import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { adminApi } from '../../Api'
import { CreateProduct } from '../../components/CreateProduct'
import { Table } from '../../components/Table'
import { PRODUCTS_QUERY_KEY } from '../../tools/queryKeys'

export function ProductsTable({ setIsAddItem }) {
  const { user } = useSelector((store) => store.user.user)

  const { data, isLoading, isFetching } = useQuery({
    queryKey: PRODUCTS_QUERY_KEY.concat(user),
    queryFn: () => adminApi.getAllProducts(),
  })

  // const queryClient = useQueryClient()

  // const onSuccessHandler = () => {
  //   queryClient.invalidateQueries(PRODUCTS_QUERY_KEY.concat(item))
  // }

  // const { mutate } = useMutation({
  //   mutationFn: () => adminApi.deleteProduct(item.id),
  //   onSuccess: onSuccessHandler,
  // })

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

  if (!data) {
    return <CreateProduct />
  }

  const products = data?.data
  return (
    <Table setIsAddItem={setIsAddItem} items={products} />
  )
}
