import { useNavigate } from 'react-router-dom'
import './style.css'

export default function NavbarLP() {
  const navigate = useNavigate()

  const handleLogin = e => {
    e.preventDefault()
    navigate('/login')
  }

  const handleSignUp = e => {
    e.preventDefault()
    navigate('/signup')
  }

  return (
    <nav className='navbar-lp'>
      <h1 className='navbar-lp-logo'>RawGames</h1>
      <div className='navbar-lp-buttons'>
        <button className='navbar-lp-login' onClick={handleLogin}>
          Login
        </button>
        <button className='navbar-lp-signup' onClick={handleSignUp}>
          Sign Up
        </button>
      </div>
    </nav>
  )
}
