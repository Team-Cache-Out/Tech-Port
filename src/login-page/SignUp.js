import React, {useState} from 'react';
import Modal from 'react-modal';
import { Link } from "react-router-dom";
import SignIn from './SignIn';
import LogIn from "./Login";

Modal.setAppElement('#root');

function SignUp(props) {


  const submit = () => {
    let name = document.getElementById('signUp-name')
    let email =  document.getElementById('signUp-email')
    let password = document.getElementById('signUp-password')
    let confirmedPass =  document.getElementById('signUp-passConfirm')
    if((password.value === confirmedPass.value) && (name.value.length > 0) && (email.includes('@'))){
        props.setmodalIsOpen(false);
    } else {
        window.alert(`Please verify your inputted information`)
    }
    console.log(`${password.value} & ${confirmedPass.value}`)
  }
  
  return (
        <Modal isOpen={props.modalIsOpen} className={"SignUp-Modal"}>
  <div className="SignUp-Container">
    <h1>Sign Up</h1>
    <form onSubmit={submit}>
      <label>Enter Your Name</label>
      <input className='signUp-name' id='signUp-name'></input>
      <br/>
      <label>Enter Your Email</label>
      <input className='signUp-email' id='signUp-email'></input>
      <br/>
      <label>Enter Your Password</label>
      <input className='signUp-password' id='signUp-password'></input>
      <br/>
      <label>Confirm Your Password</label>
      <input className='signUp-passConfirm' id='signUp-passConfirm'></input>
      <br/>
      <input className='signUp-button' type='submit'></input>
    <Link to="/" className='SignUp-CancelButton'>X</Link> 
    </form>
  </div>

        </Modal>
        
  )
}

export default SignUp