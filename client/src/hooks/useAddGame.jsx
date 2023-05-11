import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function useAddGame() {
  const navigate = useNavigate()
  const initialValues = {
    name: '',
    background_image: '',
    description: '',
    released: '',
    platforms: [],
    newGenres: [],
    rating: 1
  }
  const initialErrorValues = {
    name: '',
    background_image: '',
    description: '',
    released: '',
    platforms: '',
    newGenres: '',
    rating: ''
  }

  function esFechaMayorQueHoy(fecha) {
    const hoy = new Date()
    const fechaIngresada = new Date(fecha)
    return fechaIngresada > hoy
  }

  const [addGame, setAddGame] = useState(initialValues)
  const [error, setError] = useState(initialErrorValues)
  const [hasChanges, setHasChanges] = useState(false)

  function validateField(name, value) {
    switch (name) {
      case 'name':
        return value.length === 0 ? 'Este campo es obligatorio' : ''
      case 'background_image':
        return value.length === 0
          ? 'Este campo es obligatorio'
          : value.length > 255
          ? 'Solo se puede como maximo 255 caracteres'
          : ''
      case 'description':
        return value.length === 0
          ? 'Este campo es obligatorio'
          : value.length > 255
          ? 'Máximo caracteres 40'
          : ''
      case 'released':
        return value.length === 0
          ? 'Este campo es obligatorio'
          : esFechaMayorQueHoy(value)
          ? 'La fecha no puede ser una fecha futura'
          : ''
      case 'rating':
        return value.length === 0 ? 'Este Campo es obligatorio' : ''
      default:
        return ''
    }
  }

  function handleChange(e) {
    const { name, value } = e.target
    setAddGame({ ...addGame, [name]: value })
    setError({ ...error, [name]: validateField(name, value) })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const indexKeys = Object.keys(addGame)
    for (let i = 0; i < indexKeys.length; i++) {
      if (addGame[indexKeys[i]].length === 0) {
        console.log(`llegue al error ${indexKeys[i]}`)
        setError(prevState => ({
          ...prevState,
          [indexKeys[i]]: 'Este campo es obligatorio'
        }))
        return window.alert(`Tienes un error en: ${indexKeys[i]}`)
      }
    }
    for (let i = 0; i < indexKeys.length; i++) {
      if (error[indexKeys[i]].length !== 0) {
        return window.alert('Tienes un error')
      }
    }
    fetch('http://localhost:3001/videogames', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(addGame)
    })
      .then(data => data.json())
      .then(({ message }) => {
        if (message === 'Video game created successfully') {
          navigate('/app')
        }
      })
  }

  const handleChangeRadius = (e, rf) => {
    const { value, checked } = e.target
    switch (rf) {
      case 'newGenres':
        if (checked) {
          setAddGame({ ...addGame, newGenres: [...addGame.newGenres, value] })
        } else {
          setAddGame({
            ...addGame,
            newGenres: addGame.newGenres.filter(a => a !== value)
          })
        }
        break
      case 'platforms':
        if (checked) {
          setAddGame({ ...addGame, platforms: [...addGame.platforms, value] })
        } else {
          setAddGame({
            ...addGame,
            platforms: addGame.platforms.filter(a => a !== value)
          })
        }
        break
      case 'newTags':
        if (checked) {
          setAddGame({ ...addGame, newTags: [...addGame.newTags, value] })
        } else {
          setAddGame({
            ...addGame,
            newTags: addGame.newTags.filter(a => a !== value)
          })
        }
        break
      case 'newStores':
        if (checked) {
          setAddGame({ ...addGame, newStores: [...addGame.newStores, value] })
        } else {
          setAddGame({
            ...addGame,
            newStores: addGame.newStores.filter(a => a !== value)
          })
        }
        break
      default:
        break
    }
    setHasChanges(true)
  }

  useEffect(() => {
    if (hasChanges) {
      setError(prevState => ({
        ...prevState,
        newGenres:
          addGame.newGenres.length === 0 ? 'Este campo es obligatorio' : '',
        platforms:
          addGame.platforms.length === 0 ? 'Este campo es obligatorio' : ''
      }))
      setHasChanges(false)
    }
  }, [addGame, hasChanges])
  return { addGame, handleChange, handleChangeRadius, handleSubmit, error }
}
