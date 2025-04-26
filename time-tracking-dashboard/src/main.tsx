import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Container from './components/Container'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Container className='min-h-screen flex flex-col items-center'><App /></Container>

  </StrictMode>,
)
