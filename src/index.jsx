import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter basename='/demo/doubanpocket'>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
