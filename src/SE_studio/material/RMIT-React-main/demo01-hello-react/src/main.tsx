import React from 'react'
import ReactDOM from 'react-dom/client'

// import Application Component
import App from './App.tsx'

// import css file to main.tsx
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
