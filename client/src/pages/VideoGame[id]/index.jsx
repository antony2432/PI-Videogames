import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './style.css'

export default function VideoGame() {
  const { id } = useParams()
  const [videGame, setVideGame] = useState({})

  useEffect(() => {
    fetch(`http://localhost:3001/videogames/${id}`)
      .then(response => response.json())
      .then(data => setVideGame(data))
  }, [])

  const {
    name,
    description,
    released,
    updated,
    background_image,
    background_image_additional,
    website,
    rating,
    platforms,
    newStores,
    newTags,
    newGenres
  } = videGame

  return (
    <article className='videogame-container'>
      <img src={background_image} alt={name} className='videogame-image' />
      <div className='videogame-content'>
        <h1 className='videogame-name'>{name}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: description }}
          className='videogame-description'
        ></div>
        <div className='videogame-details'>
          <div>
            <h3 className='videogame-details-heading'>Released:</h3>
            <p className='videogame-details-text'>{released}</p>
          </div>
          <div>
            <h3 className='videogame-details-heading'>Last Updated:</h3>
            <p className='videogame-details-text'>{updated}</p>
          </div>
          <div>
            <h3 className='videogame-details-heading'>Platforms:</h3>
            <ul className='videogame-details-list'>
              {platforms && platforms.map(p => <li key={p.id}><span>{p.name}</span></li>)}
            </ul>
          </div>
          <div>
            <h3 className='videogame-details-heading'>Stores:</h3>
            <ul className='videogame-details-list'>
              {newStores && newStores.map(s => <li key={s.id}><span>{s.name}</span></li>)}
            </ul>
          </div>
          <div>
            <h3 className='videogame-details-heading'>Tags:</h3>
            <ul className='videogame-details-list'>
              {newTags && newTags.map(t => <li key={t.id}><span>{t.name}</span></li>)}
            </ul>
          </div>
          <div>
            <h3 className='videogame-details-heading'>Genres:</h3>
            <ul className='videogame-details-list'>
              {newGenres && newGenres.map(g => <li key={g.id}><span>{g.name}</span></li>)}
            </ul>
          </div>
        </div>
        <p className='videogame-rating'>Rating: {rating}</p>
        <p className='videogame-website'>
          Visit the official website: <Link to={website}>{website}</Link>
        </p>
      </div>
      {background_image_additional && (
        <img
          src={background_image_additional}
          alt={name + ' additional'}
          className='videogame-additional-image'
        />
      )}
    </article>
  )
}
