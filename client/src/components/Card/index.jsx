import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './style.css'

export default function Card({ game }) {
  const { name, background_image, rating, genres, id,  stores} = game
  return (
    <article className='card'>
      <img src={background_image} alt={name} className='card-img' />
      <h1 className='card-name'>
        <Link to={`videogame/${id}`}>{name}</Link>
      </h1>
      <span className='card-rating'>{rating}</span>
      <ul className='card-platforms'>
        {genres && genres.map(({name, id}) => {
          return <li key={id}>{name}</li>
        })}
      </ul>
      <ul className='card-platforms'>
        {stores && stores.slice(0, 3).map(({name, id}) => {
          return <li key={id}>{name}</li>
        })}
      </ul>
    </article>
  )
  }

Card.propTypes = {
  game: PropTypes.any.isRequired
}
