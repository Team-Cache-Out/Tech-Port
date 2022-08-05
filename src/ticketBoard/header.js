import React, { useContext } from 'react'
import "./ticketBoard.css";
import SignInContext from '../Context/SignInContext';

export default function Header() {

  /* Destructuring the user object from the SignInContext. */
  const { user, currentUni } = useContext(SignInContext)
  
  /**
   * If the currentUni variable is equal to 1, return the string 'University of Houston'. 
   * If the currentUni variable is equal to 2, return the string 'University of Arizona'. 
   * If the currentUni variable is equal to 3, return the string 'Oregon State University'. 
   * If the currentUni variable is equal to 4, return the string 'Pepperdine University'.
   * @returns the name of the university that is currently selected.
   */
  const currentUniversity = () => {
    if(currentUni === 1) {
      return 'University of Houston'
    } else if(currentUni === 2) {
      return 'University of Arizona'
    } else if(currentUni === 3) {
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
              <h2 className="myCampus">{currentUniversity()}</h2>
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