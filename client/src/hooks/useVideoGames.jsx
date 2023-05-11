import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  filterGames,
  setVideoGames,
  setFilters,
  displayGames,
  searchVideoGames
} from '../redux/slices/videoGamesSlice'

export default function useVideoGames() {
  const dispatch = useDispatch()
  const display = useSelector(displayGames)
  const search = useSelector(searchVideoGames)

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:3001/videogames')
      .then(response => response.json())
      .then(data => {
        dispatch(setVideoGames(data))
      })
      .finally(() => {
        dispatch(
          filterGames({
            genders: 'all',
            platform: 'all',
            tags: 'all',
            stores: 'all'
          })
        )
        setLoading(false)
      })
  }, [])

  const changeFilter = (name, value) => {
    dispatch(setFilters({ name, value }))
  }

  return {
    loading,
    display,
    changeFilter,
    search
  }
}
