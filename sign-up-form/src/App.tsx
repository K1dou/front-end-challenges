import Container from './components/Container'
import './index.css'
import LoginPage from './pages/LoginPage'

function App() {


  return (
    <>
      <Container className='min-h-screen flex justify-center' >
        <LoginPage />
      </Container>
    </>
  )
}

export default App
