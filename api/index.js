import axios from 'axios'

const api = axios.create({
  baseURL: process.env.API_URL,
});

export const getAllPhotos = (page, limit = 9) => {
  return api.get(`/api/photo?page=${page}&limit=${limit}`)
}

export const postPhoto = (formData) => {
  return api.post('/api/photo', formData)
}

export const deleteAllPhotos = () => {
  return api.delete('/api/photo')
}

export const getTitle = () => {
  return api.get('/api/title')
}

export const postTitle = (newTitle) => {
  return api.post('/api/title', { title: newTitle })
}

export const getDescription = () => {
  return api.get('/api/description')
}

export const postDescription  = (newDescription ) => {
  return api.post('/api/description', { description: newDescription })
}