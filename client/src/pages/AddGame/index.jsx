import useAddGame from '../../hooks/useAddGame'
import { genders, plataform } from '../../utils/selects'
import Card from '../../components/Card'
import './style.css'

export default function AddGame() {
  const { handleChange, handleChangeRadius, handleSubmit, error, addGame } =
    useAddGame()
  return (
    <div className='addgame-container'>
      <div className='form-container'>
        <h1 className='form-title'>Add your game to the database</h1>

        <label className='form-label'>
          <span>Name of the game:</span>
          <input
            className='form-input'
            type='text'
            name='name'
            onChange={handleChange}
          />
          <p className='form-error'>{error.name && error.name}</p>
        </label>

        <label className='form-label'>
          <span>Game image URL:</span>
          <input
            className='form-input'
            type='text'
            name='background_image'
            onChange={handleChange}
          />
          <p className='form-error'>
            {error.background_image && error.background_image}
          </p>
        </label>

        <label className='form-label'>
          <span>Description:</span>
          <textarea
            className='form-input'
            name='description'
            onChange={handleChange}
          />
          <p className='form-error'>{error.description && error.description}</p>
        </label>

        <label className='form-label'>
          <span>Release date:</span>
          <input
            className='form-input'
            type='date'
            name='released'
            onChange={handleChange}
          />
          <p className='form-error'>{error.released && error.released}</p>
        </label>

        <label className='form-label'>
          <span>Rating: </span>
          <input
            type='range'
            name='rating'
            min='0'
            max='5'
            step='0.1'
            className='form-input'
            onChange={handleChange}
            defaultValue={1}
          />
          <p className='form-error'>{error.rating && error.rating}</p>
        </label>

        <div className='form-label'>
          <span>Genders:</span>
          <div className='input-container'>
            {genders.map(({ name, id }) => (
              <label key={id} className='input-label'>
                <input
                  type='checkbox'
                  value={name}
                  id={id}
                  className='input-box'
                  onChange={e => handleChangeRadius(e, 'genres')}
                />
                <div className='checkbox-tag'>
                  <span className='checkbox-text'>{name}</span>
                </div>
              </label>
            ))}
          </div>
          <p className='form-error'>{error.genres && error.genres}</p>
        </div>

        <div className='form-label'>
          <span>Platforms:</span>
          <div className='input-container'>
            {plataform.map(({ name, id }) => (
              <label key={id} className='input-label'>
                <input
                  type='checkbox'
                  value={name}
                  id={id}
                  className='input-box'
                  onChange={e => handleChangeRadius(e, 'platforms')}
                />
                <div className='checkbox-tag'>
                  <span className='checkbox-text'>{name}</span>
                </div>
              </label>
            ))}
          </div>
          <p className='form-error'>{error.platforms && error.platforms}</p>
        </div>

        {/* <div className='form-label'>
        <span>Tags:</span>
        <div className='input-container'>
          {tags.map((t, i) => (
            <label key={i} className='input-label'>
              <input
                type='checkbox'
                value={t}
                className='input-box'
                onChange={e => handleChangeRadius(e, 'newTags')}
              />
              <div className='checkbox-tag'>
                <span className='checkbox-text'>{t}</span>
              </div>
            </label>
          ))}
        </div>
        <p className='form-error'>{error.newTags && error.newTags}</p>
      </div>

      <div className='form-label'>
        <span>Stores:</span>
        <div className='input-container'>
          {stores.map((s, i) => (
            <label key={i} className='input-label'>
              <input
                type='checkbox'
                value={s}
                className='input-box'
                onChange={e => handleChangeRadius(e, 'newStores')}
              />
              <div className='checkbox-tag'>
                <span className='checkbox-text'>{s}</span>
              </div>
            </label>
          ))}
        </div>
        <p className='form-error'>{error.newStores && error.newStores}</p>
      </div> */}

        <button type='submit' className='form-button' onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <Card game={addGame} />
    </div>
  )
}
