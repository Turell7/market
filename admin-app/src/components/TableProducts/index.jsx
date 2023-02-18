import { useNavigate } from 'react-router-dom'
import { CustomTable } from '../CustomTable'

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

export function TableProducts({ products }) {
  const navigate = useNavigate()
  const addItem = () => navigate('/products/create')
  return <CustomTable headCells={headCells} rows={products} addItem={addItem} />
}
