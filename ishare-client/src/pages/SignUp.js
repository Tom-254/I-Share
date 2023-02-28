import React from 'react'
import { Link } from 'react-router-dom'
import IShareButton from '../components/IShareButton'
import IShareInput from '../components/IShareInput'
import IShareLogo from '../components/IShareLogo'

const SignUp = () => {
  return (
    <div className="flex-center content-container">
      <form className='flex-center__column form-container'>
        <IShareLogo />
        <div className="flex-column title-button__container">
          <p className='form-title'>Let us help you create an account 😁</p>
          <div className='flex-column inputs-container'>
            <div className='flex'>
              <IShareInput labelName={"First Name"} />
              <IShareInput labelName={"Last Name"} />
            </div>
            <IShareInput labelName={"Email"} />
            <div className='flex'>
              <IShareInput labelName={"Password"} />
              <IShareInput labelName={"Confirm Password"} />
            </div>
            <Link to="/" className='form-forgot-password' >
              Forgot Password ?
            </Link>
          </div>
          <IShareButton buttonName={"Login"}  />
        </div>
        <p className='form-account-message'>
        Already have an account ?  <Link to="/login" className='to-signup-signin'>Sign Up</Link>
        </p>
      </form>
    </div>
  )
}

export default SignUp