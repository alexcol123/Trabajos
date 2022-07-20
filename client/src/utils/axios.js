import axios from 'axios'

// Register route  http://localhost:5000/api/v1/auth/login

const customFetch = axios.create({
  baseURL: 'http://localhost:5000/api/v1/auth',
})


export default customFetch