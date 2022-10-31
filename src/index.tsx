import './index.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3030'

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token && config?.headers) {
      config.headers['access-token'] = `${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)