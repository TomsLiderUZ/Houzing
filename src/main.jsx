import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Index from "./root/Index"
import RootProvider from './context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <RootProvider>
        <Index></Index>
      </RootProvider>
  </BrowserRouter>
)
