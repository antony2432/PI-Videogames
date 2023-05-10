import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import Navbar from '../../components/Navbar'
import Aside from '../../components/Aside'
import './style.css'

export default function AppLayout({ children }) {
  const { pathname } = useLocation()
  const verificator = pathname.slice(0, 15)
  return (
    <div
      className={
        verificator === '/app/videogame/' || verificator === '/app/addgame'
          ? 'container2'
          : 'container'
      }
    >
      <header>
        <Navbar />
      </header>
      {verificator === '/app/videogame/' ||
      verificator === '/app/addgame' ? null : (
        <Aside />
      )}
      <main>{children}</main>
    </div>
  )
}

AppLayout.propTypes = {
  children: PropTypes.any.isRequired
}
