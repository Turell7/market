// import { useMutation, useQueryClient } from '@tanstack/react-query'
// import { adminApi } from '../../Api'
// import { PRODUCTS_QUERY_KEY } from '../../tools/queryKeys'

export function TableItem({
  item, titlsTable, deliteItem,
}) {
  // const clickHandler = () => {
  //   setDeliteItem(item.id)
  //   // onDelete
  // }
  const tableRow = titlsTable.map((e) => {
    if ((Array.isArray(item[e]))) {
      return <td key={e}>Array</td>
    }
    if ((e === 'image')) {
      return (
        <td key={e}>
          <img src={item[e]} alt={item.name} />
        </td>
      )
    }
    if ((e === 'description')) {
      return (
        <td key={e}>
          <div className="w-80 max">
            <p className="line-clamp-3">{item[e]}</p>
          </div>
        </td>
      )
    }
    return <td key={e}>{item[e]}</td>
  })
  return (
    <tr>
      <th>
        <div>
          <input type="checkbox" className="checkbox" />
        </div>
      </th>
      {tableRow}
      <th>
        <button onChange={deliteItem} type="button" className="btn btn-error btn-circle btn-sm bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
          </svg>
        </button>
      </th>
    </tr>
  )
}
