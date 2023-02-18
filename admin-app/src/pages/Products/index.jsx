import { useState } from 'react'
import { TableProducts } from '../../components/TableProducts'
import { CreateProduct } from '../../components/CreateProduct'

export function Products() {
  const [isAddItem, setIsAddItem] = useState(false)
  return (
    <>
      {/* <Outlet /> */}
      { isAddItem && <CreateProduct />}
      <TableProducts setIsAddItem={setIsAddItem} />
    </>
  )
}
