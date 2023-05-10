import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs'
import './style.css'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-Enlaces'>
        <a href='#'>Política de privacidad</a>
        <a href='#'>Términos y condiciones</a>
        <a href='#'>Preguntas frecuentes</a>
      </div>
      <div className='footer-Text'>
        <ul>
          <li>
            <BsFacebook />
          </li>
          <li>
            <BsTwitter />
          </li>
          <li>
            <BsInstagram />
          </li>
        </ul>
        <p>
          RawGames es una plataforma de catálogo de videojuegos que ofrece
          información detallada sobre juegos, incluyendo características,
          clasificaciones, DLC y capturas de pantalla.
        </p>
      </div>
    </footer>
  )
}
