import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

import App from './App'
import { BrowserRouter } from 'react-router-dom'
// import SyllabusForm from './components/SyllabusForm/SyllabusForm'

const appJsx = (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>
)

ReactDOM.render(appJsx, document.getElementById('root'))
