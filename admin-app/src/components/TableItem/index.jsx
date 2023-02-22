export function TableItem({ item }) {
  return (
    <tr>
      <th>
        <div>
          <input type="checkbox" className="checkbox" />
        </div>
      </th>
      <th>
        <div className="w-40">
          <figure><img src={item.image} alt="product" /></figure>
        </div>
      </th>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>{item.stock}</td>
      <td>{item.discount}</td>
      <td>
        <textarea className="textarea" disabled placeholder="Bio" value={item.description} />
      </td>

      <th>
        <button type="button" className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  )
}
