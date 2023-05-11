import { urlNav } from './resources'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './style.css'

export default function Navbar() {
  const navigate = useNavigate()
  const handleSignOut = e => {
    e.preventDefault()
    navigate('/')
  }
  return (
    <nav className='nav'>
      <h1 className='nav-logo'>RawGames</h1>
      <section className='nav-section'>
        <ul className='nav-list-links'>
          {urlNav.map(({ label, path }, i) => (
            <li key={i}>
              <Link to={path} className='link'>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <button onClick={handleSignOut} className='sign-button'>Sign out</button>
      </section>
    </nav>
  )
}
