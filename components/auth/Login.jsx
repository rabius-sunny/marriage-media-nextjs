import Link from 'next/link'

export default function Login() {
  return <div className='inputs'>
    <form>
      <h1>Sign in</h1>
      <label htmlFor='email'>E-mail or Phone no:</label>
      <input type='text'
        id='email'
        name='email'
        placeholder='enter your email or phone no.'

      />
      <label htmlFor='email'>Password:</label>
      <input id='password'
        type='password'
        name='password'
        placeholder='enter your password'

      />

      <div className='flex justify-between'>
        <div className='check'>
          <input
            type='checkbox'
            name='remember'
            id='remember'

          />
          <span className='checkmark'></span>
          <label htmlFor='remember'>Remember me</label>
        </div>
        <Link href='/forget-password'>Forget password?</Link>
      </div>
      <div className='text-center mt-2 mb-2'>
        <button type='submit'>Login</button>
      </div>
      <p className='text-center'> - Or - </p>
      <div className='text-center googleLogin'>
        <span>Login with Google</span>
      </div>
      <div className='text-center mt-2 mb-2'>
        <span className='signup'>
          Don't have an account? <Link href='/sign-up'>Sign up</Link>
        </span>
      </div>
    </form>
  </div>
}
