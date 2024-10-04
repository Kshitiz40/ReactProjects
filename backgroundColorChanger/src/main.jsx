import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BgPage from './BgPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BgPage />
  </StrictMode>,
)
