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
      <form className='SignIn-Form' onSubmit={submit} id='SignIn-Form'>
          <label>EMAIL</label> <br/>
          <input placeholder='example@email.com' className='Email-Input'>
          </input>
          <br/>
          <br/>
          <label>PASSWORD</label>
          <br></br>
          <input placeholder='Password...' className='Password-Input'  type="password"> 
          </input>
          <br/>
          <br></br>
          <button className='SignIn-Button' id="SignIn-Button" form="SignIn-Form" type='Submit'>Sign In
          </button>
          <br/>
          <p className='NoAccount-Info'>Dont have an account? Click <Link to="/signup" onClick={handleSignUp} className="SignUp-Link">Here</Link> </p>
      </form>
      
    </div>
    
  )
}

export default SignIn