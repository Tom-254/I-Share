import React from 'react'
import { Link } from 'react-router-dom'
import IShareButton from '../components/IShareButton'
import IShareInput from '../components/IShareInput'
import IShareLogo from '../components/IShareLogo'

const Login = () => {
  return (
    <div className="flex-center content-container">
      <form className='flex-center__column form-container'>
        <IShareLogo />
        <div className="flex-column title-button__container">
          <p className='form-title'>Hello 👋 welcome back</p>
          <div className='flex-column inputs-container'>
            <IShareInput labelName={"Email"} />
            <IShareInput labelName={"Password"} />
            <Link to="/" className='form-forgot-password' >
              Forgot Password ?
            </Link>
          </div>
          <IShareButton buttonName={"Login"}  />
        </div>
        <p className='form-account-message'>
          Don’t have an account ?  <Link to="/signup" className='to-signup-signin'>Sign Up</Link>
        </p>
      </form>
    </div>
  )
}

export default Login