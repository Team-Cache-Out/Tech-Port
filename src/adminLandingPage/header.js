import React, { useContext } from 'react'
import "../ticketBoard/ticketBoard.css";
import SignInContext from '../Context/SignInContext';

export default function Header() {

  /* Destructuring the user object from the SignInContext. */
  const { user } = useContext(SignInContext)
  
function logout () {
  window.localStorage.clear()
}
    return (
        <div>
          <nav className="nav1">
            <div className="leftPosition">
              <div className="role">{user.role}</div>
            </div>
            <div className="centerPosition">
              <h2 className="myCampus">WorldWide Technical Foundation</h2>
            </div>
            <div className="rightPosition">
              <div className="columnPosition">
              <div className="myName">Welcome, {user.name.split(' ')[0]}</div>
              <a className="logout" href="/" onClick={logout}>Logout</a>
              </div>
            </div>
          </nav>
        </div> 
    );

}