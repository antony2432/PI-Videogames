import { genders, plataform, tags, stores } from '../../utils/selects'
import { useNavigate } from 'react-router-dom'
import useVideoGames from '../../hooks/useVideoGames'
import SearchBar from '../SearchBar'
import DeleteButton from '../DeleteButton'
import './style.css'

export default function Aside() {
  const { changeFilter, search } = useVideoGames()
  const navigate = useNavigate()

  const handleChange = e => {
    const { name, value } = e.target
    changeFilter(name, value)
  }

  const handleAddGame = e => {
    e.preventDefault()
    navigate('addgame')
  }

  return (
    <aside className='aside'>
      <SearchBar />
      {search.length === 0 ? (
        <>
          <h3 className='aside-title'>Filters</h3>
          <section className='aside-section'>
            <label className='aside-label'>
              <span className='aside-span'>Genders: </span>
              <select
                name='genders'
                onChange={handleChange}
                className='aside-select'
              >
                <option value='all'>All</option>
                {genders.map(({ name, id }) => (
                  <option value={name} key={id}>
                    {name}
                  </option>
                ))}
              </select>
            </label>
            <label className='aside-label'>
              <span className='aside-span'>Platform: </span>
              <select
                name='platform'
                onChange={handleChange}
                className='aside-select'
              >
                <option value='all'>All</option>
                {plataform.map(({ name, id }) => (
                  <option value={name} key={id}>
                    {name}
                  </option>
                ))}
              </select>
            </label>
            <label className='aside-label'>
              <span className='aside-span'>Tags: </span>
              <select
                name='tags'
                onChange={handleChange}
                className='aside-select'
              >
                <option value='all'>All</option>
                {tags.map((t, i) => (
                  <option value={t} key={i}>
                    {t}
                  </option>
                ))}
              </select>
            </label>
            <label className='aside-label'>
              <span className='aside-span'>Stores: </span>
              <select
                name='stores'
                onChange={handleChange}
                className='aside-select'
              >
                <option value='all'>All</option>
                {stores.map((s, i) => (
                  <option value={s} key={i}>
                    {s}
                  </option>
                ))}
              </select>
            </label>
            <button onClick={handleAddGame} className='aside-button'>
              Add Game
            </button>
          </section>
        </>
      ) : (
        <>
          <DeleteButton />
        </>
      )}
    </aside>
  )
}
