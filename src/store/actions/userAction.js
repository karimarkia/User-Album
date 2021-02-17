import axios from 'axios'
import {
  FETCH_USERS,
  FETCH_ALBUMS,
  REMOVE_ALBUM,
  ALBUM_DETAILS,
  POST_ALBUM,
  POST_PHOTO,
} from '../types'

export const fetchUsers = () => async (dispatch) => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users')
  dispatch({ type: FETCH_USERS, payload: res.data })
}

export const fetchAlbums = (id) => async (dispatch) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/albums?userId=${id}`
  )
  dispatch({
    type: FETCH_ALBUMS,
    payload: res.data,
  })
}

export const fetchAlbumsDetaild = (id) => async (dispatch) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
  )
  dispatch({
    type: ALBUM_DETAILS,
    payload: res.data,
  })
}
export const postNewPic = (pic, id) => async (dispatch) => {
  const res = await axios.post(
    `https://jsonplaceholder.typicode.com/photos?albumId=${id}`,
    pic
  )
  dispatch({
    type: POST_PHOTO,
    payload: res.data,
  })
}

export const postNewAlbum = (album) => async (dispatch) => {
  const res = await axios.post(
    'https://jsonplaceholder.typicode.com/albums',
    album
  )
  dispatch({
    type: POST_ALBUM,
    payload: res.data,
  })
}

export const removeAlbum = (id) => async (dispatch) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/albums/${id}`)
  dispatch({
    type: REMOVE_ALBUM,
    payload: id,
  })
}
