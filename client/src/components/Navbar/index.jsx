import { urlNav } from './resources'
import { Link } from 'react-router-dom'
import './style.css'

export default function Navbar() {
  return (
    <nav className='nav'>
      <h1 className='nav-logo'>RawGames</h1>
      <ul className='nav-list-links'>
        {urlNav.map(({ label, path }, i) => (
          <li key={i}>
            <Link to={path} className='link'>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
