import axios from 'axios'

const api = axios.create({
  baseURL: process.env.API_URL,
});

export const getAllPhotos = () => {
  return api.get('/getAll')
}

export const postPhoto = (formData) => {
  return api.post('/add', formData)
}

export const deleteAllPhotos = () => {
  return api.delete('/deleteAll')
}