import { useQuery } from '@tanstack/react-query'
// import { Box, Skeleton } from '@mui/material'
// import { CustomTable } from '../CustomTable'
import { PRODUCTS_QUERY_KEY } from '../../tools/queryKeys'
import { api } from '../../Api'
import { Table } from '../Table'

// const headCells = [
//   {
//     id: 'image',
//     numeric: false,
//     disablePadding: false,
//     label: 'image',
//   },
//   {
//     id: 'name',
//     numeric: false,
//     disablePadding: true,
//     label: 'Title product',
//   },
//   {
//     id: 'price',
//     numeric: true,
//     disablePadding: false,
//     label: 'price (₽)',
//   },
//   {
//     id: 'createdAt',
//     numeric: true,
//     disablePadding: false,
//     label: 'created at',
//   },
//   {
//     id: 'updatedAt',
//     numeric: true,
//     disablePadding: false,
//     label: 'updated at',
//   },
// ]

export function TableProducts({ setIsAddItem }) {
  // const { user } = useSelector((store) => store.user.user)

  const { data, isLoading, isFetching } = useQuery({
    // queryKey: PRODUCTS_QUERY_KEY.concat(user),
    queryKey: PRODUCTS_QUERY_KEY,
    queryFn: () => api.getAllProducts(),
  })

  console.log(data)

  if (isLoading || isFetching) {
    return (
      <div>jhkh</div>
      // <Box sx={{ width: 640 }}>
      //   <Skeleton sx={{ height: 100 }} animation="wave" />
      //   <Skeleton sx={{ height: 80 }} animation="wave" />
      //   <Skeleton sx={{ height: 80 }} animation="wave" />
      //   <Skeleton sx={{ height: 80 }} animation="wave" />
      //   <Skeleton sx={{ height: 80 }} animation="wave" />
      //   <Skeleton sx={{ height: 80 }} animation="wave" />
      //   <Skeleton variant="text" />
      // </Box>
    )
  }

  const products = data.data
  return <Table setIsAddItem={setIsAddItem} products={products} />
  // <CustomTable headCells={headCells} rows={products} setIsAddItem={setIsAddItem} />
}
