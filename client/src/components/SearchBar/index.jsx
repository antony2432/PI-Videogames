import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchSearchByname } from '../../services/fetching'
import { BsSearch } from 'react-icons/bs'
// import { BsFill0SquareFill } from "react-icons/bs";
import {
  setSearchVideogame,
} from '../../redux/slices/videoGamesSlice'
import './style.css'

export default function SearchBar() {
  const dispatch = useDispatch()
  const [search, setsearch] = useState('')
  const handleChange = e => {
    const { value } = e.target
    setsearch(value)
  }

  const handleSearch = async e => {
    e.preventDefault()
    try {
      const data = await fetchSearchByname(search)
      data.forEach(d => {
        console.log(d.id)
      })
      dispatch(setSearchVideogame(data))
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <section className='searchBar'>
      <div className='searchBar-inputs-button'>
        <input
          type='search'
          name='searchInput'
          onChange={handleChange}
          className='aside-select'
        />
        <button onClick={handleSearch} className='searchabar-button'>
          <BsSearch className='sd' />
        </button>
      </div>
    </section>
  )
}
