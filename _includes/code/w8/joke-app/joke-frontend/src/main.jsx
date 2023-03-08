import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ThemeWrapper from './context/ThemeContext'
import AuthWrapper from './context/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeWrapper>
        <AuthWrapper>
          <App />
        </AuthWrapper>
      </ThemeWrapper>
    </BrowserRouter>
  </React.StrictMode>
)
