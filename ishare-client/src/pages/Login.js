import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import IShareButton from '../components/IShareButton'
import IShareInput from '../components/IShareInput'
import IShareLogo from '../components/IShareLogo'

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  }

  return (
    <div className="flex-center content-container">
      <form className='flex-center__column form-container' onSubmit={onSubmit}>
        <IShareLogo />
        <div className="flex-column title-button__container">
          <p className='form-title'>Hello 👋 welcome back</p>
          <div className='flex-column inputs-container'>
            <IShareInput inputValue={inputs.email} labelName={"Email"} inputName="email" onChange={onChange} isRequired={true}/>
            <IShareInput inputValue={inputs.password} labelName={"Password"} inputName="password" onChange={onChange} isRequired={true}/>
            <Link to="/" className='form-forgot-password' >
              Forgot Password ?
            </Link>
          </div>
          <IShareButton buttonName={"Login"} buttonType="submit"/>
        </div>
        <p className='form-account-message'>
          Don’t have an account ?  <Link to="/signup" className='to-signup-signin'>Sign Up</Link>
        </p>
      </form>
    </div>
  )
}

export default Login