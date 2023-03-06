import axios from 'axios'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

const myApi = axios.create({
  baseURL: BACKEND_URL,
})

export default myApi
