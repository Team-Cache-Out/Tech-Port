import React, {useState} from 'react';
import { Link } from "react-router-dom";


function SignIn(props) {
    
  const submit = () => {
    console.log(`Submit!`)
  }
  const handleSignUp = () => {
    props.setmodalIsOpen(true);
  }
  return (
    <div className='SignIn-Container'>
      <h2 className='signIn-Header'>SIGN IN</h2>
      <form className='SignIn-Form' onSubmit={submit}>
          <label>Enter Your Email</label> <br/>
          <input placeholder='example@email.com' className='Email-Input'>
          </input>
          <br/>
          <label>Enter Password:</label>
          <br></br>
          <input placeholder='Password...' className='Password-Input'  type="password"> 
          </input>
          <br/>
          <br></br>
          <input className='SignIn-Button' id="SignIn-Button" type='Submit'>
          </input>
          <br/>
          <small>Dont have an account? Click <Link to="/signup" onClick={handleSignUp} className="SignUp-Link">Here</Link> </small>
      </form>
    </div>
    
  )
}

export default SignIn