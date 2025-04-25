import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Container from './components/Container'
import './index.css'
import LoginPage from './pages/LoginPage'
import SuccessPage from './pages/SuccessPage'

function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Container className='min-h-screen md:min-h-screen flex justify-center md:items-center md:bg-neutral-blue-700' >
          <LoginPage />
        </Container>} />

        <Route path="/success" element={<Container className='min-h-screen md:justify-center md:items-center md:bg-neutral-blue-700  flex justify-center items-end px-6 md:px-16 lg:bg-neutral-blue-700           ' >
          <SuccessPage />
        </Container>} />


      </Routes>
    </BrowserRouter>
  )
}

export default App
