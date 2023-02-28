import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { AuthContext } from '../context/authContext';
import IShareButton from '../components/IShareButton'
import IShareInput from '../components/IShareInput'
import IShareLogo from '../components/IShareLogo'

const SignUp = () => {
  const [inputs, setInputs] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: ""
  });

  const { signup } = useContext(AuthContext);

  const onChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(inputs);
    } catch (error) {
      console.log(error.message)
    }
  }


  return (
    <div className="flex-center content-container">
      <form className='flex-center__column form-container' onSubmit={onSubmit}>
        <IShareLogo />
        <div className="flex-column title-button__container">
          <p className='form-title'>Let us help you create an account 😁</p>
          <div className='flex-column inputs-container'>
            <div className='flex'>
              <IShareInput inputValue={inputs.first_name} labelName={"First Name"} inputName="first_name" onChange={onChange} isRequired={true}/>
              <IShareInput inputValue={inputs.last_name} labelName={"Last Name"} inputName="last_name" onChange={onChange} isRequired={true}/>
            </div>
            <IShareInput inputValue={inputs.email} labelName={"Email"} inputName="email" onChange={onChange} isRequired={true}/>
            <div className='flex'>
              <IShareInput inputValue={inputs.password} labelName={"Password"} inputName="password" onChange={onChange} isRequired={true}/>
              <IShareInput inputValue={inputs.confirm_password} labelName={"Confirm Password"} inputName="confirm_password" onChange={onChange} isRequired={true}/>
            </div>
            <Link to="/" className='form-forgot-password' >
              Forgot Password ?
            </Link>
          </div>
          <IShareButton buttonName={"Sign up"} buttonType="submit"/>
        </div>
        <p className='form-account-message'>
        Already have an account ?  <Link to="/login" className='to-signup-signin'>Login</Link>
        </p>
      </form>
    </div>
  )
}

export default SignUp