import { genders, plataform, tags, stores } from '../../utils/selects';
import { useNavigate } from 'react-router-dom';
import useVideoGames from '../../hooks/useVideoGames';
import './style.css';

export default function Aside() {
  const { changeFilter } = useVideoGames();
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    changeFilter(name, value);
  };

  const handleAddGame = e => {
    e.preventDefault();
    navigate('addgame');
  };

  return (
    <aside className='aside'>
      <h3 className='aside-title'>Filters</h3>
      <section className='aside-section'>
        <label className='aside-label'>
          <span className='aside-span'>Genders: </span>
          <select name='genders' onChange={handleChange} className='aside-select'>
            <option value='all'>All</option>
            {genders.map((g, i) => (
              <option value={g} key={i}>
                {g}
              </option>
            ))}
          </select>
        </label>
        <label className='aside-label'>
          <span className='aside-span'>Platform: </span>
          <select name='platform' onChange={handleChange} className='aside-select'>
            <option value='all'>All</option>
            {plataform.map((p, i) => (
              <option value={p} key={i}>
                {p}
              </option>
            ))}
          </select>
        </label>
        <label className='aside-label'>
          <span className='aside-span'>Tags: </span>
          <select name='tags' onChange={handleChange} className='aside-select'>
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
          <select name='stores' onChange={handleChange} className='aside-select'>
            <option value='all'>All</option>
            {stores.map((s, i) => (
              <option value={s} key={i}>
                {s}
              </option>
            ))}
          </select>
        </label>
      </section>
      <button onClick={handleAddGame} className='aside-button'>
        Add Game
      </button>
    </aside>
  );
}
