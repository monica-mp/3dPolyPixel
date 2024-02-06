import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import { Rutes } from './Routes/Routes'
import AuthProvider from './context/authContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <AuthProvider>
      <Rutes />
      </AuthProvider>
  </React.StrictMode>
)
