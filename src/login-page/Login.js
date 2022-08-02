import React from 'react';
import Logo from './Logo';
import SignIn from './SignIn';
import SignUp from './SignUp';
import './login.css';
import {SignInProvider} from './SignInContext'

function LogIn() {
    
  return (
    <SignInProvider>
      <div className='logInBody'>
              <Logo />
              <SignIn />
      </div>
    </SignInProvider>
  )
}
export default LogIn