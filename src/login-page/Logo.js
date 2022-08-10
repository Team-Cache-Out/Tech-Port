import React from 'react';
import logo from './croppedlogo.png';
import './login.css';

function Logo() {
  return (
    <div className='title-container'>
      <img className="Login-Logo-Img" src={logo} alt="Logo" />
      <h1 className='login-title'>Worldwide Technical Foundation</h1>    
    </div>    
  )
}

export default Logo