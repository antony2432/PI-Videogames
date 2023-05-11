import { useDispatch } from 'react-redux'
import { removeSearch } from '../../redux/slices/videoGamesSlice'
import './style.css'

export default function DeleteButton() {
  const dispatch = useDispatch()
  const handleDelete = e => {
    e.preventDefault()
    dispatch(removeSearch())
  }
  return (
    <button onClick={handleDelete} className='delete-button'>
      delete
    </button>
  )
}
