import React, { useContext } from 'react'
import "./ticketBoard.css";
import SignInContext from '../login-page/SignInContext';

export default function Header() {

  /* Destructuring the user object from the SignInContext. */
  const { user } = useContext(SignInContext)

    return (
        <div>
          <nav className="nav1">
            <div className="leftPosition">
              <div className="role">{user.role}</div>
            </div>
            <div className="centerPosition">
              <h2 className="myCampus">Campus</h2>
            </div>
            <div className="rightPosition">
              <div className="columnPosition">
                <div className="myName">Welcome {user.name}</div>
                <a className="logout" href="/">Logout</a>
              </div>
            </div>
          </nav>
        </div> 
    );

}