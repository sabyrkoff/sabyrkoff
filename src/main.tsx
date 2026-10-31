import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from '@/App'
import '@/index.css'

const savedTheme = window.localStorage.getItem('sabyrkoff-theme')
document.documentElement.dataset.theme = savedTheme === 'light' ? 'light' : 'dark'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
