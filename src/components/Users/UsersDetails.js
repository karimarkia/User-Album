import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers, fetchAlbums } from '../../store/actions/userAction'
import AlbumDetails from './AlbumDetails'
import PostAlbum from './PostAlbum'
import ShowAlbums from './ShowAlbums'

const UsersDetails = () => {
  const [title, setTitle] = useState('')
  const [userId, setUserId] = useState('')
  const dispatch = useDispatch()
  const user = useSelector((state) => state.userReducer.users)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  const handleUserChange = (e) => {
    setUserId(e.target.value)
    dispatch(fetchAlbums(e.target.value))
  }

  const showTitle = (title) => {
    setTitle(title)
  }

  return (
    <>
      {/* show all users */}
      <div className="left">
        <select onChange={handleUserChange} className="select-user">
          <option default className="names">
            Select User...
          </option>
          {user.map((user) => (
            <option key={user.id} value={user.id} className="names">
              {user.name}
            </option>
          ))}
        </select>

        {/* show user albums */}
        <ShowAlbums showTitle={showTitle} />

        {/* post new album */}
        <PostAlbum userId={userId} />
      </div>

      {/* show album details */}
      <AlbumDetails title={title} />
    </>
  )
}

export default UsersDetails
