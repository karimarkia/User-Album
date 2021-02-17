import { useSelector, useDispatch } from 'react-redux'
import { removeAlbum, fetchAlbumsDetaild } from '../../store/actions/userAction'

const ShowAlbums = ({ showTitle }) => {
  const albums = useSelector((state) => state.userReducer.albums)
  const dispatch = useDispatch()
  const handleRemove = (id) => dispatch(removeAlbum(id))

  const showAlbumDetails = ({ title, id }) => {
    dispatch(fetchAlbumsDetaild(id))
    showTitle(title)
  }
  return (
    <>
      <h2>User Albums : </h2>
      <div className="albums-section">
        <div className="albums">
          {albums.map((album) => (
            <div key={album.id} className="album-div">
              <p className='album-title' onClick={() => showAlbumDetails(album)}>{album.title}</p>
              <button onClick={() => handleRemove(album.id)}>X</button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ShowAlbums
