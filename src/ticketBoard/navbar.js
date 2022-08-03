import React, { useContext } from 'react'
import "./ticketBoard.css";
import SignInContext from '../login-page/SignInContext';
import CampusContext from '../Context/CampusContext';

export default function Navbar() {

    /* Destructuring the user object from the SignInContext. */
    const { user } = useContext(SignInContext)

    /* Destructuring the setActiveComp function from the CampusContext. */
    const { setActiveComp } = useContext(CampusContext)

    /**
     * When the user clicks on a button, the state of the active component is set to the id of the button that was clicked.
     * @param e - the event object
     */
    const handleClick = (e) => {
        setActiveComp(e.target.id)
    }

   /* Checking the user role and then rendering the appropriate navbar. */
    if(user === 'admin') {
        return (
            <nav className="nav2">
                <div className="nav2Center">
                    <div className="navLinks" id='createTicket'  onClick={handleClick}>
                    Create Ticket
                    </div>  
                    <div className="navLinks" id='ticketBoard'  onClick={handleClick}>
                    Ticket Board
                    </div>       
                    <div className="navLinks" id='campusTechs'  onClick={handleClick}>
                    Campus Techs
                    </div>  
                    <div className="navLinks" id='campusReport' onClick={handleClick}>
                    Campus Report
                    </div>
                </div> 
          </nav>
        )
    } else {
        return (
            <nav className="nav2">
                <div className="nav2Center">
                    <div className="navLinks" id='createTicket' onClick={handleClick}>
                    Create Ticket
                    </div>  
                    <div className="navLinks" id='ticketBoard' onClick={handleClick}>
                    Ticket Board
                    </div>
                    <div className="navLinks" id='myTickets' onClick={handleClick}>
                    My Tickets
                    </div>          
                </div>
            </nav>
        )
    }
}