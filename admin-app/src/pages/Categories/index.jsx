import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { adminApi } from '../../Api'
import { CreateCategory } from '../../components/CreateCategory'
import { Table } from '../../components/Table'
import { PRODUCTS_QUERY_KEY } from '../../tools/queryKeys'

export function Categories() {
  const [isAddItem, setIsAddItem] = useState(false)

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

  const categories = data.data
  return (
    <>
      { isAddItem && <CreateCategory />}
      <Table setIsAddItem={setIsAddItem} items={categories} />
    </>
  )
}
