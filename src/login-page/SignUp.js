import React, {useState} from 'react';
import Modal from 'react-modal';
import { Link } from "react-router-dom";
import SignIn from './SignIn';
import LogIn from "./Login";
import './signUp.css'

Modal.setAppElement('#root');

function SignUp(props) {
  const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmedPass, setConfirmedPass] = useState('')

    const handleName = (e) => {
      setName(e.target.value)
    }
    const handleEmail = (e) => {
      setEmail(e.target.value)
    }
    const handlePassword = (e) => {
      setPassword(e.target.value)
    }
    const handleConfirmedPass = (e) => {
      setConfirmedPass(e.target.value)
    }

  const submit = (event) => {
    event.preventDefault()
    if((password === confirmedPass) && (name.length > 0) && (email.includes('@'))){
      fetch(`http://localhost:4500/users/signup`, {
      method: 'POST',
      body: JSON.stringify({
          'password': `${password}`,
          'university_id': 1,
          'role': 1,
          'email': `${email}`,
          'name': `${name}`
      }),
      headers: {
          'Content-type' : 'application/json'
        }
      })
      .then (res => res.json())
      .then (data => console.log(data))
        // props.setmodalIsOpen(false);
    } else {
        window.alert(`Please verify your inputted information`)
    }
    console.log(`${password} & ${confirmedPass}`)
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
              <input className='signUp-name' id='signUp-name' onChange={handleName} value={name} ></input>
              <br/>
              <br/>
              <label className='signUp-Labels'><center>Email</center></label>
              <input className='signUp-email' id='signUp-email' onChange={handleEmail} value={email} ></input>
              <br/>
              <br/>
              <label className='signUp-Labels'><center>Enter Password</center></label>
              <input className='signUp-password' id='signUp-password' onChange={handlePassword} value={password} ></input>
              <br/>
              <br/>
              <label className='signUp-Labels'><center>Confirm Password</center></label>
              <input className='signUp-passConfirm' id='signUp-passConfirm' onChange={handleConfirmedPass} value={confirmedPass} ></input>
              <br/>
              <br/>
              <button className='signUp-button' type='submit' form='signUp-Form'>Sign Up</button>
            </form>
          </div>
        </Modal>
        
  )
}

export default SignUp