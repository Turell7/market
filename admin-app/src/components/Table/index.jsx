import { TableItem } from '../TableItem'

export function Table({ products }) {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>
              <div>
                <input type="checkbox" className="checkbox" />
              </div>
            </th>
            <th>Image</th>
            <th>Titele</th>
            <th>Price</th>
            <th>stock</th>
            <th>Discount</th>
            <th>Description</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>

          {products?.map((item) => (
            <TableItem
              key={item.id}
              item={item}
            />
          ))}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th> </th>
            <th>Image</th>
            <th>Titele</th>
            <th>Price</th>
            <th>stock</th>
            <th>Discount</th>
            <th>Description</th>
          </tr>
        </tfoot>

      </table>
    </div>
  )
}
