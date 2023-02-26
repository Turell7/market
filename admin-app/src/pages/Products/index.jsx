import { useState } from 'react'
import { CreateProduct } from '../../components/CreateProduct'
import { ProductsTable } from './ProductsTable'

export function Products() {
  const [isAddItem, setIsAddItem] = useState(false)

  return (
    <>
      { isAddItem && <CreateProduct />}
      <ProductsTable setIsAddItem={setIsAddItem} />
    </>
  )
}
