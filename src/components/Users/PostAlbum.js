import { useState, useCallback } from 'react'
import { useDispatch} from 'react-redux'
import { postNewAlbum, postNewPic } from '../../store/actions/userAction'
import { useDropzone } from 'react-dropzone'
import Loader from './UI/Loader'

const PostAlbum = ({ userId }) => {
  const [title, setTitle] = useState('')
  const [img, setImg] = useState('')
  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState(false)
  const dispatch = useDispatch()

  const onDrop = useCallback((acceptedFiles) => {
    const url = `https://api.cloudinary.com/v1_1/dcugyfvrr/upload`

    acceptedFiles.forEach(async (acceptedFile) => {
      setLoading(true)
      const formData = new FormData()
      formData.append('file', acceptedFile)
      formData.append('upload_preset', 'ipgx0ksb')
      formData.append('api_key', 296556937983527)

      const response = await fetch(url, {
        method: 'post',
        body: formData,
      })
      const data = await response.json()
      setImg(data.url)
      setLoading(false)
    })
  }, [])

  const requestOptions = {
    title: title,
    userId: Number(userId),
  }

  const req2 = {
    thumbnailUrl: img,
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const submitForm = (e) => {
    e.preventDefault()
    dispatch(postNewAlbum(requestOptions))
    dispatch(postNewPic(req2, userId))
    setTitle('')
  }
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const handleShow = () => {
    setShow(!show)
  }

  return (
    <div>
      <h2 onClick={handleShow}>Add Album +</h2>
      {show ? (
        <form onSubmit={submitForm}>
          <input
            onChange={handleTitleChange}
            value={title}
            type="text"
            placeholder="Enter Album Title..."
            className="post-input"
          />
          {loading ? (
            <Loader />
          ) : (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {isDragActive ? (
                <p className="drag-drop">Drop the files here ...</p>
              ) : (
                <p className="drag-drop">
                  Drag 'n' drop some files here, or click to select files
                </p>
              )}
            </div>
          )}
          <button type="submit" className="btn-submit">
            Submit
          </button>
        </form>
      ) : null}
    </div>
  )
}

export default PostAlbum
