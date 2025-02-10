// eslint-disable-next-line no-unused-vars
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles/index.css'
import NoteApp from './components/NoteApp.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NoteApp />
  </BrowserRouter>
)