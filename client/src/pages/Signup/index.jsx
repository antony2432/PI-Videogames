import useLogin from '../../hooks/useLogin'
import'./style.css'

export default function Signup() {
  const { handleChange, error, handleRedirectLogin, handleCreate } = useLogin()
  return (
    <main className='signup-container'>
      <h1 className='signup-title'>Register</h1>
      <form onSubmit={handleCreate} className='signup-form'>
        <label className='signup-label'>
          <span className='signup-label-text'>UserName</span>
          <input type='text' name='userNameForm' onChange={handleChange} className='signup-input' />
          <p className='signup-error'>{error.userNameError && error.userNameError}</p>
        </label>
        <label className='signup-label'>
          <span className='signup-label-text'>Email</span>
          <input type='text' name='emailForm' onChange={handleChange} className='signup-input' />
          <p className='signup-error'>{error.emailError && error.emailError}</p>
        </label>
        <label className='signup-label'>
          <span className='signup-label-text'>Password</span>
          <input type='password' name='passwordForm' onChange={handleChange} className='signup-input' />
          <p className='signup-error'>{error.passwordError && error.passwordError}</p>
        </label>
        <label className='signup-label'>
          <span className='signup-label-text'>Confirm Password</span>
          <input
            type='password'
            name='confirmPasswordForm'
            onChange={handleChange}
            className='signup-input'
          />
          <p className='signup-error'>
            {error.confirmPasswordError && error.confirmPasswordError}
          </p>
        </label>
        <button style={{ display: 'none' }}></button>
      </form>
      <section className='signup-buttons-container'>
        <button onClick={handleRedirectLogin} className='signup-button signup-login-button'>Or Login</button>
        <button onClick={handleCreate} className='signup-button signup-signup-button'>Crear</button>
      </section>
    </main>
  )
}
