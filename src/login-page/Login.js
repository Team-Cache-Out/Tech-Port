import React from 'react';
import Logo from './Logo';
import SignIn from './SignIn';
import SignUp from './SignUp';
import './login.css';

function LogIn() {
    
  return (
      <div className='logInBody'>
              <Logo />
              <SignIn />
      </div>
  )
}
export default LogIn