import axios from 'axios'
import { useCallback, useState } from 'react'
// import { sdfds } from '../../../../public/storage/images'

export function TestUploadsFiles() {
  const [img, setImg] = useState(null)

  const sendFile = useCallback(async () => {
    try {
      const data = new FormData()
      data.append('image', img)

      await axios.post('http://localhost:3050/upload/images', data, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      })

        .then((res) => {
          console.log(res.data)
          console.log(res.data.path)
        })
    } catch (error) {
      console.log(error)
    }
  }, [img])

  return (
    <>
      <div> Test upload files </div>

      <input type="file" name="image" onChange={(e) => setImg(e.target.files[0])} />
      <button className="btn" type="button" onClick={sendFile}>Отправить</button>
    </>
  )
}
