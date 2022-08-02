import React, { useContext } from 'react'
import "./ticketBoard.css";
import SignInContext from '../login-page/SignInContext';

export default function Header() {

  const { user } = useContext(SignInContext)

    return (
        <>
          <nav className="nav1">
            <div className="leftPosition">
              <a className="role">tech</a>
            </div>
            <div className="centerPosition">
            <h2 className="myCampus">Campus</h2>
            </div>
            <div className="rightPosition">
              <div className="columnPosition">
                <a className="myName">Welcome name</a>
                <a className="logout" href="/">Logout</a>
              </div>
            </div>
            </nav>
          </>
    );

}