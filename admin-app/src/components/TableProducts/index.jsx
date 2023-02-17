import { Box, Skeleton } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { CustomTable } from '../CustomTable'
import { api } from '../../Api'
import { PRODUCTS_QUERY_KEY } from '../../tools/queryKeys'

const headCells = [
  {
    id: 'picture',
    numeric: false,
    disablePadding: false,
    label: 'picture',
  },
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Title product',
  },
  {
    id: 'price',
    numeric: true,
    disablePadding: false,
    label: 'price (₽)',
  },
  {
    id: 'createdAt',
    numeric: true,
    disablePadding: false,
    label: 'created at',
  },
  {
    id: 'updatedAt',
    numeric: true,
    disablePadding: false,
    label: 'updated at',
  },
]

export function TableProducts({ setIsAddItem }) {
  const { user } = useSelector((store) => store.user.user)

  const { data, isLoading, isFetching } = useQuery({
    queryKey: PRODUCTS_QUERY_KEY.concat(user),
    queryFn: () => api.getAllProducts(),
  })

  if (isLoading || isFetching) {
    return (
      <Box sx={{ width: 640 }}>
        <Skeleton sx={{ height: 100 }} animation="wave" />
        <Skeleton sx={{ height: 80 }} animation="wave" />
        <Skeleton sx={{ height: 80 }} animation="wave" />
        <Skeleton sx={{ height: 80 }} animation="wave" />
        <Skeleton sx={{ height: 80 }} animation="wave" />
        <Skeleton sx={{ height: 80 }} animation="wave" />
        <Skeleton variant="text" />
      </Box>
    )
  }

  const products = data.data
  return <CustomTable headCells={headCells} rows={products} setIsAddItem={setIsAddItem} />
}
