import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { InputProvider } from './context'
import { BrowserRouter as Router } from 'react-router-dom'
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <InputProvider>
        <App />
      </InputProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)
