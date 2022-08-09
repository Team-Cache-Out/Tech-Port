import React, {useState} from 'react';
import Modal from 'react-modal';
import { Link, useNavigate } from "react-router-dom";
// import SignIn from './SignIn';
// import LogIn from "./Login";
import './signUp.css'

Modal.setAppElement('#root');


function SignUp(props) {
  const navigate = useNavigate();
  const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmedPass, setConfirmedPass] = useState('')
    const [uniId, setUniId] = useState(1)

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
    const handleUniSelector = (e) => {
      setUniId(parseInt(e.target.value))
    }

  const submit = (event) => {
    event.preventDefault()
    if((password === confirmedPass) && (name.length > 0) && (email.includes('@'))){
      fetch(`https://worldwide-technical-foundation.herokuapp.com/users/signup`, {
      method: 'POST',
      body: JSON.stringify({
          'password': `${password}`,
          'university_id': uniId,
          'role': "tech",
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
        window.alert("Account has been created!")
        navigate('/')
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
              <input className='signUp-name' id='signUp-name' onChange={handleName} value={name} placeholder='Doug Dimmadome' ></input>
              <br/>
              <br/>
              <label className='signUp-Labels'><center>Email</center></label>
              <input className='signUp-email' id='signUp-email' onChange={handleEmail} value={email} placeholder='example@email.com' ></input>
              <br/>
              <br/>
              <label className='signUp-Labels'><center>Enter Password</center></label>
              <input className='signUp-password' id='signUp-password' onChange={handlePassword} value={password} type='password' placeholder='Password...' ></input>
              <br/>
              <br/>
              <label className='signUp-Labels'><center>Confirm Password</center></label>
              <input className='signUp-passConfirm' id='signUp-passConfirm' onChange={handleConfirmedPass} value={confirmedPass} type='password' placeholder='Confirm password...' ></input>
              <br/>
              <br/>
              <label className='uniSelect-Labels'><center>Select your university:</center></label>
              <center>
                <select className='uniSelect' onChange={handleUniSelector}>
                  <option value='1'>University of Houston</option>
                  <option value='2'>University of Arizona</option>
                  <option value='3'>Oregon State University</option>
                  <option value='4'>Pepperdine University</option>
                </select>
              </center>
              <button className='signUp-button' type='submit' form='signUp-Form'>Sign Up</button>
            </form>
          </div>
        </Modal>
        
  )
}

export default SignUp