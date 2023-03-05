import { useEffect, useState } from 'react'

export function TestFileManager() {
  const [parent, setParent] = useState('')
  const [data, setData] = useState({
    path: '',
    files: [],
  })

  useEffect(() => {
    fetch('http://localhost:8000/')
      .then((res) => res.json())
      .then(
        (result) => {
          setParent('')
          setData(result)
        },
      )
  }, [])

  const clickHandler = (e) => {
    fetch(`http://localhost:8000/?path=${e}`)
      .then((res) => res.json())
      .then(
        (result) => {
          const linkArr = result.path.split('/')
          console.log(linkArr)
          linkArr.pop()
          setParent(linkArr.join('/'))
          setData(result)
        },
      )
  }

  const directoryDisplay = (item) => {
    if (item.dir) {
      return (
        <li key={item.name}>
          <button type="button" className="list-group-item list-group-item-action" onClick={() => clickHandler(`${data.path}/${item.name}`)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-folder" viewBox="0 0 16 16">
              <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174
14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1
1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"
              />
            </svg>
            {item.name}
          </button>
        </li>
      )
    }
    return (
      <li key={item.name}>
        <button type="button" className="list-group-item list-group-item-action" onClick={clickHandler}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file" viewBox="0 0 16 16">
            <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
          </svg>
          {item.name}
        </button>
      </li>
    )
  }

  return (
    <>
      <div>File Manager</div>

      <div>
        <button className="btn btn-outline border-0" type="button" onClick={() => clickHandler(parent)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
          </svg>
          LEVEL UP
        </button>
      </div>
      <div className="breadcrumbs">
        current:
        {' '}
        {data.path === '' ? '/' : data.path}
      </div>
      <div>
        <ul className="menu p-4 w-60 bg-base-100 text-base-content">
          {data.files.map((item) => directoryDisplay(item))}
        </ul>
      </div>
    </>
  )
}
