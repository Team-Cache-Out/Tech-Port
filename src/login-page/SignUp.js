import React, {useState} from 'react';
import Modal from 'react-modal';
import { Link } from "react-router-dom";
import SignIn from './SignIn';
import LogIn from "./Login";
import './signUp.css'

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
          <div className="signUp-Container">
            <div className='Xmarksthespot'>
            <Link to="/" className='SignUp-CancelButton'>X</Link> 
            </div>
            <h2 className='signUp-Header'>SIGN UP</h2>
            <form onSubmit={submit} className='signUp-Form' id='signUp-Form'>
              <label className='signUp-Labels'><center>First and Last Name</center></label>
              <input className='signUp-name' id='signUp-name'></input>
              <br/>
              <br/>
              <label className='signUp-Labels'><center>Email</center></label>
              <input className='signUp-email' id='signUp-email'></input>
              <br/>
              <br/>
              <label className='signUp-Labels'><center>Enter New Password</center></label>
              <input className='signUp-password' id='signUp-password'></input>
              <br/>
              <br/>
              <label className='signUp-Labels'><center>Confirm Password</center></label>
              <input className='signUp-passConfirm' id='signUp-passConfirm'></input>
              <br/>
              <br/>
              <button className='signUp-button' type='submit' form='signUp-Form'>Sign Up</button>
            </form>
          </div>
        </Modal>
        
  )
}

export default SignUp