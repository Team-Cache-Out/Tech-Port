import React, { useContext } from "react"
import "./ticketBoard.css";
import CampusContext from '../Context/CampusContext'

export default function Ticket(prop) {

    const { setTicketModal, singleTicket, setSingleTicket } = useContext(CampusContext)
    
    const handleClick = (e) => {
        fetch(`https://worldwide-technical-foundation.herokuapp.com/tickets/${e.target.id}`)
        .then(response => response.json())
        .then(data => setSingleTicket(data))
        if(singleTicket !== null) {
            setTicketModal(true)
        }
    }

    const priority = () => {

        if(prop.elem.priority === 'Routine') {
            return 'priorityCircleGreen'
        } else if(prop.elem.priority === 'Urgent') {
            return 'priorityCircleYellow'
        } else {
            return 'priorityCircleRed'
        }
    }

    return (
        <div id={prop.elem.ticket_id} onClick={handleClick} className="ticket">
               <div className="innerTicketContainerLeft">
                  <div className={priority()}>.</div>
                </div>
                <div className="innerTicketContainer">
                  <div className="problem">Problem: {prop.elem.problem}</div>
                  <div className="location">Location: {prop.elem.location}</div>
                  <div className="contact">Contact: {prop.elem.point_of_contact}</div>
                </div>
              </div>
    )
}