import {
  ALBUM_DETAILS,
  FETCH_ALBUMS,
  FETCH_USERS,
  REMOVE_ALBUM,
  POST_ALBUM,
  POST_PHOTO,
} from '../types'

const initialState = { users: [], albums: [], albumDetails: [] }

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload,
      }
    case FETCH_ALBUMS:
      return {
        ...state,
        albums: action.payload,
      }
    case ALBUM_DETAILS:
      return {
        ...state,
        albumDetails: action.payload,
      }
    case POST_PHOTO:
      return {
        ...state,
        albumDetails: [...state.albumDetails, action.payload],
      }
    case POST_ALBUM:
      return {
        ...state,
        albums: [...state.albums, action.payload],
      }
    case REMOVE_ALBUM:
      const newAlbum = state.albums.filter(
        (album) => album.id !== action.payload
      )
      return {
        ...state,
        albums: newAlbum,
      }
    default:
      return state
  }
}
export default userReducer
