import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { adminApi } from '../../Api'
import { CreateCategory } from '../../components/CreateCategory'
import { Table } from '../../components/Table'
import { PRODUCTS_QUERY_KEY } from '../../tools/queryKeys'

export function CategoriesTable({ setIsAddItem }) {
  const { user } = useSelector((store) => store.user.user)

  const { data, isLoading, isFetching } = useQuery({
    queryKey: PRODUCTS_QUERY_KEY.concat(user),
    queryFn: () => adminApi.getAllCategories(),
  })

  if (isLoading || isFetching) {
    return (
      <div>Loading ...</div>
    )
  }

  if (!data) {
    return <CreateCategory />
  }

  const categories = data?.data
  return (
    <Table setIsAddItem={setIsAddItem} items={categories} />
  )
}
