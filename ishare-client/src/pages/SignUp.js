import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import IShareButton from '../components/IShareButton'
import IShareInput from '../components/IShareInput'
import IShareLogo from '../components/IShareLogo'

const SignUp = () => {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const onChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted")
  }


  return (
    <div className="flex-center content-container">
      <form className='flex-center__column form-container' onSubmit={onSubmit}>
        <IShareLogo />
        <div className="flex-column title-button__container">
          <p className='form-title'>Let us help you create an account 😁</p>
          <div className='flex-column inputs-container'>
            <div className='flex'>
              <IShareInput inputValue={inputs.firstName} labelName={"First Name"} inputName="firstName" onChange={onChange} isRequired={true}/>
              <IShareInput inputValue={inputs.lastName} labelName={"Last Name"} inputName="lastName" onChange={onChange} isRequired={true}/>
            </div>
            <IShareInput inputValue={inputs.email} labelName={"Email"} inputName="email" onChange={onChange} isRequired={true}/>
            <div className='flex'>
              <IShareInput inputValue={inputs.password} labelName={"Password"} inputName="password" onChange={onChange} isRequired={true}/>
              <IShareInput inputValue={inputs.confirmPassword} labelName={"Confirm Password"} inputName="confirmPassword" onChange={onChange} isRequired={true}/>
            </div>
            <Link to="/" className='form-forgot-password' >
              Forgot Password ?
            </Link>
          </div>
          <IShareButton buttonName={"Login"} buttonType="submit"/>
        </div>
        <p className='form-account-message'>
        Already have an account ?  <Link to="/login" className='to-signup-signin'>Login</Link>
        </p>
      </form>
    </div>
  )
}

export default SignUp