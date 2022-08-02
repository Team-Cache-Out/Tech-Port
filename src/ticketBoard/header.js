import React from 'react'
import "./ticketBoard.css";

export default function Header() {
    return (
        <>
          <nav className="nav1">
            <div className="leftPosition">
              <a className="tech">Tech</a>
            </div>
            <div className="centerPosition">
            <h2 className="myCampus">Campus</h2>
            </div>
            <div className="rightPosition">
              <div className="columnPosition">
                <a className="myName">Welcome Name</a>
                <a className="logout" href="/">Logout</a>
              </div>
            </div>
            </nav>
            </>
            );

}