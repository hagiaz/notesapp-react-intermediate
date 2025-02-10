// eslint-disable-next-line no-unused-vars
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles/index.css'
import NoteApp from './components/NoteApp.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NoteApp />
    <Footer />
  </BrowserRouter>
)