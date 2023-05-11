import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
  FaSteam,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaGamepad,
  FaGooglePlay,
  FaItchIo
} from 'react-icons/fa'
import { BsNintendoSwitch } from 'react-icons/bs'
import { SiEpicgames } from 'react-icons/si'
import './style.css'

export default function Card({ game }) {
  const { name, background_image, rating, genres, id, stores } = game

  function StoreIcons(storeName) {
    switch (storeName) {
      case 'Steam':
        return <FaSteam />
      case 'PlayStation Store':
        return <FaPlaystation />
      case 'Xbox Store':
      case 'Xbox 360 Store':
        return <FaXbox />
      case 'App Store':
        return <FaApple />
      case 'GOG':
        return <FaGamepad />
      case 'Nintendo Store':
        return <BsNintendoSwitch />
      case 'Google Play':
        return <FaGooglePlay />
      case 'itch.io':
        return <FaItchIo />
      case 'Epic Games':
        return <SiEpicgames />
      default:
        return null
    }
  }
  return (
    <article className='card'>
      <section className='card-secction-img'>
        <img src={background_image} alt={name} className='card-img' />
      </section>
      <h1 className='card-name'>
        <Link to={`videogame/${id}`}>{name}</Link>
      </h1>
      <section>
        <span className='card-rating'>{rating}</span>
      </section>
      <section className='card-secction-prop'>
        <ul className='card-platforms'>
          {genres &&
            genres.map(({ name, id }) => {
              return <li key={id}>{name}</li>
            })}
        </ul>
        <hr />
        <ul className='card-stores'>
          {stores &&
            stores.slice(0, 4).map(({ name, id }) => {
              return <li key={id}>{StoreIcons(name)}</li>
              // return <li key={id}>{name}</li>
            })}
        </ul>
      </section>
    </article>
  )
}

Card.propTypes = {
  game: PropTypes.any.isRequired
}
