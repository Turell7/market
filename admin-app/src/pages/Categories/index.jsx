import { useState } from 'react'
import { CreateCategory } from '../../components/CreateCategory'
import { CategoriesTable } from './CategoriesTable'

export function Categories() {
  const [isAddItem, setIsAddItem] = useState(false)

  return (
    <>
      { isAddItem && <CreateCategory />}
      <CategoriesTable setIsAddItem={setIsAddItem} />
    </>
  )
}
