import { useState } from 'react'
import { CreateProduct } from '../../components/CreateProduct'
import { TableProducts } from '../../components/TableProducts'

export function Products() {
  const [isAddItem, setIsAddItem] = useState(false)
  return (
    <>
      { isAddItem && <CreateProduct />}
      <TableProducts setIsAddItem={setIsAddItem} />
    </>
  )
}
