import React, { useState } from 'react'
import "./ticketBoard.css";

export default function Navbar() {

    const [user, setUser] = useState(null)

    // <Route exact path='/createticket' element={
    //   <TicketCreatePage />
    // }></Route>

    if(user === 'admin') {
        return (
            <nav className="nav2">
            <div className="nav2Center">
            <a className="navLinks" href="/newticket">
              Create Ticket
            </a>  
            <a className="navLinks" href="/ticketboard">
              Ticket Board
            </a>       
            <a className="navLinks" href="/campusTechs">
            Campus Techs
            </a>  
            </div>
             <a className="navLinks" href="/campusReport">
              Campus Report
            </a> 
          </nav>
        )
    } else {
        return (
            <nav className="nav2">
            <div className="nav2Center">
            <a className="navLinks" href="/newticket">
              Create Ticket
            </a>  
            <a className="navLinks" href="/ticketboard">
              Ticket Board
            </a>
            <a className="navLinks" href="/myticket">
              My Tickets
            </a>          
            </div>
          </nav>
        )
    }
    
}