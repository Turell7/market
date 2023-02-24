import { TableItem } from './TableItem'

export function Table({ setIsAddItem, items, deleteItem }) {
  const titlsTable = Object.keys(items[0])

  const headerTable = () => titlsTable.map((e) => <th key={e}>{e}</th>)

  return (
    <div className="overflow-x-auto w-full">
      <table className="table table-compact w-full">
        {/* head */}
        <thead>
          <tr>
            <th>
              <div>
                <input type="checkbox" className="checkbox" />
              </div>
            </th>
            {headerTable()}
            <th>
              <button className="p-15 tooltip tooltip-bottom" data-tip="Created a new product" onClick={() => { setIsAddItem((prev) => !prev) }} type="button">
                <svg className="fill-current text-gray-600 w-3 " viewBox="0 0 448 512">
                  <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {items?.map((item) => (
            <TableItem
              key={item.id}
              item={item}
              titlsTable={titlsTable}
              deleteItem={deleteItem}
            />
          ))}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th> </th>
            {headerTable()}
            <th> </th>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
