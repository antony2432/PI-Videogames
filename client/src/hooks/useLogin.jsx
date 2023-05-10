import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function useLogin() {
  const emailRegEx = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
  const navigate = useNavigate()
  const initialState = {
    userNameForm: '',
    emailForm: '',
    passwordForm: '',
    confirmPasswordForm: ''
  }
  const initialError = {
    userNameError: '',
    emailError: '',
    passwordError: '',
    confirmPasswordError: ''
  }
  const [dataForm, setDataForm] = useState(initialState)

  const [error, setError] = useState(initialError)

  const handleChange = e => {
    const { name, value } = e.target
    setDataForm({
      ...dataForm,
      [name]: value
    })
    switch (name) {
      case 'emailForm':
        if (!emailRegEx.test(value)) {
          setError({
            ...error,
            emailError: 'Tiene que ingresar un email valido'
          })
        } else {
          setError({ ...error, emailError: '' })
        }
        break
      case 'passwordForm':
        if (value.length < 8) {
          setError({
            ...error,
            passwordError: 'Tiene que se como minimo 8 digitos'
          })
        } else if (value.length > 18) {
          setError({
            ...error,
            passwordError: 'Como Maximo solo son 18 digitos'
          })
        } else {
          setError({ ...error, passwordError: '' })
        }
        break
      case 'confirmPasswordForm':
        if (value !== dataForm.passwordForm) {
          setError({
            ...error,
            confirmPasswordError: 'Tiene que ser igual que el password'
          })
        } else {
          setError({ ...error, confirmPasswordError: '' })
        }
        break
      case 'userNameForm':
        if (value >= 0) {
          setError({
            ...error,
            userNameError: 'Tiene que llenar este campo'
          })
        } else {
          setError({
            ...error,
            userNameError: ''
          })
        }
        break
      default:
        break
    }
  }
  const handleRedirectSignUp = e => {
    e.preventDefault()
    navigate('/signup')
  }

  const handleRedirectLogin = e => {
    e.preventDefault()
    navigate('/login')
  }

  const handleLogin = e => {
    e.preventDefault()
    if (dataForm.emailForm.length === 0 || dataForm.passwordForm.length === 0)
      return window.alert('faltan datos')
    if (
      !(error.emailError.length === 0) ||
      !(error.passwordError.length === 0)
    ) {
      return window.alert('Tiene errores')
    }
    if (
      dataForm.emailForm === 'achuquival@gmail.com' &&
      dataForm.passwordForm === 'nicodemo24'
    ) {
      navigate('/app')
    }
    return console.log('contraseña o id incorrecta')
  }

  const handleCreate = e => {
    e.preventDefault()
    const keysData = Object.keys(dataForm)
    const keysError = Object.keys(error)
    for (let i = 0; i < keysData.length; i++) {
      if (dataForm[keysData[i]].length === 0) {
        return window.alert(`${keysData[i]} no tiene contenido`)
      }
    }
    for (let i = 0; i < keysError.length; i++) {
      if (error[keysError[i]]) {
        return window.alert(`el ${keysError[i]}: tiene error`)
      }
    }
    navigate('/app')
  }
  return {
    dataForm,
    error,
    handleChange,
    handleLogin,
    handleRedirectSignUp,
    handleRedirectLogin,
    handleCreate
  }
}
