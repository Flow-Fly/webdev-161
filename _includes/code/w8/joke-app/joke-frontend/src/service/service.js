import axios from 'axios'

// Frontend is running on http://localhost:5173

// Backend is running on http://localhost:5005

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

const myApi = axios.create({
  baseURL: BACKEND_URL,
})

myApi.createJoke = (joke) => {
  return myApi.post('/', joke)
}

myApi.getAllJokes = (queryString) => {
  return myApi.get(`/jokes?${queryString}`)
}

myApi.getOneJoke = (id) => {
  return myApi.get(`/jokes/${id}`)
}

myApi.deleteJoke = (id) => {
  return myApi.delete(`/jokes/${id}`)
}

myApi.updateJoke = (id, joke) => {
  return myApi.patch(`/jokes/${id}`, joke)
}

export default myApi
