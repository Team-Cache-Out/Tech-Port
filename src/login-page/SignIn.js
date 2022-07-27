import React, {useState} from 'react';
import { Link } from "react-router-dom";


function SignIn(props) {
  const [user, setUser] = useState({});
  const [loading, setLoading] =useState(true);

  let password = document.querySelector("#signIn-password");
  let email = document.querySelector("#sigIn-email");
    
  const submit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:4500/users/login`, {
      method: 'Post',
      body: JSON.stringify({
          "password": password.value,
          "email": email.value
      }),
      headers: {
          'Content-type' : 'application/json'
      }
    })

    .then ((res) => res.json())
    .then ((data) => {
      setUser(data)
    })

    console.log(email.value);
  }
  const handleSignUp = () => {
    props.setmodalIsOpen(true);
  }
  return (
    <div className='SignIn-Container'>
      <h2 className='signIn-Header'>SIGN IN</h2>
      <form className='SignIn-Form' id='SignIn-Form'>
          <label>EMAIL</label> <br/>
          <input placeholder='example@email.com' className='Email-Input' id='sigIn-email'>
          </input>
          <br/>
          <br/>
          <label>PASSWORD</label>
          <br></br>
          <input placeholder='Password...' className='Password-Input'  type="password" id='signIn-password'> 
          </input>
          <br/>
          <br></br>
          <button className='SignIn-Button' id="SignIn-Button" form="SignIn-Form" type='submit' onClick={submit}>Sign In
          </button>
          <br/>
          <p className='NoAccount-Info'>Don't have an account? Click <Link to="/signup" onClick={handleSignUp} className="SignUp-Link">Here</Link> </p>
      </form>
      
    </div>
    
  )
}

export default SignIn