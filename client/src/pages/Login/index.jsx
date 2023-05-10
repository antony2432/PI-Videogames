import useLogin from '../../hooks/useLogin'
import './style.css'

export default function Login() {
  const { handleChange, handleLogin, error, handleRedirectSignUp } = useLogin()
  return (
    <main className='login-container'>
      <section>

      <h1 className='login-title'>Login</h1>
      <form onSubmit={handleLogin} className='login-form'>
        <label className='login-label'>
          <span className='login-label-text'>Email</span>
          <input
            type='text'
            name='emailForm'
            onChange={handleChange}
            className='login-input'
          />
          <p className='error login-error'>
            {error.emailError && error.emailError}
          </p>
        </label>
        <label className='login-label'>
          <span className='login-label-text'>Password</span>
          <input
            type='password'
            name='passwordForm'
            onChange={handleChange}
            className='login-input'
          />
          <p className='error login-error'>
            {error.passwordError && error.passwordError}
          </p>
        </label>
        <button style={{ display: 'none' }}></button>
      </form>
      <section className='login-buttons-container'>
        <button
          onClick={handleRedirectSignUp}
          className='login-button login-signup-button'
        >
          Sign up
        </button>
        <button
          onClick={handleLogin}
          className='login-button login-login-button'
        >
          Login
        </button>
      </section>
      </section>
    </main>
  )
}
