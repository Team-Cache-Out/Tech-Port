import React, { useContext } from 'react'
import "./ticketBoard.css";
import SignInContext from '../Context/SignInContext';

export default function Header() {

  /* Destructuring the user object from the SignInContext. */
  const { user } = useContext(SignInContext)

  /**
   * If the user's university_id is 1, return 'University of Houston'. 
   * If the user's university_id is 2, return 'University of Arizona'. 
   * If the user's university_id is 3, return 'Oregon State University'. 
   * Otherwise, return 'Pepperdine University'.
   * @returns the name of the university based on the user's university_id.
   */
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