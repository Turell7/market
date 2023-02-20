import { CustomTable } from '../CustomTable'

export const headCells = [
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
  return <CustomTable headCells={headCells} rows={products} />
}
