import React, { useContext } from 'react'
import "./ticketBoard.css";
import SignInContext from '../Context/SignInContext';

export default function Header() {

  /* Destructuring the user object from the SignInContext. */
  const { user } = useContext(SignInContext)

  const currentUni = () => {

    if(user.university_id === 1) {
      return 'University of Houston'
    } else if(user.university_id === 2) {
      return 'University of Arizona'
    } else if(user.university_id === 2) {
      return 'Oregon State University'
    } else {
      return 'Pepperdine University'
    }
  }

    return (
        <div>
          <nav className="nav1">
            <div className="leftPosition">
              <div className="role">{user.role}</div>
            </div>
            <div className="centerPosition">
              <h2 className="myCampus">{currentUni()}</h2>
            </div>
            <div className="rightPosition">
              <div className="columnPosition">
              <div className="myName">Welcome, {user.name.split(' ')[0]}</div>
              <a className="logout" href="/">Logout</a>
              </div>
            </div>
          </nav>
        </div> 
    );

}