import React, { useContext } from "react"
import "./ticketBoard.css";
import CampusContext from '../Context/CampusContext'

export default function Ticket(prop) {

    const { setTicketModal, singleTicket, setSingleTicket } = useContext(CampusContext)

    const priorityCircle = document.querySelector('.priorityCircle')
    
    const handleClick = (e) => {
        fetch(`https://worldwide-technical-foundation.herokuapp.com/tickets/${e.target.id}`)
        .then(response => response.json())
        .then(data => setSingleTicket(data))
        if(singleTicket !== null) {
            setTicketModal(true)
        }
    }

    // if(prop.element.priority === 'routine') {
    //     priorityCircle.className='priorityCircleGreen'
    // }
    // if(prop.element.priority === 'urgent') {
    //     priorityCircle.className='priorityCircleYellow'
    // } else {
    //     priorityCircle.classname='priorityCircleRed'
    // }

    return (
        <div id={prop.elem.ticket_id} onClick={handleClick} className="ticket">
                <div className="innerTicketContainerLeft">
                  <div className='priorityCircle'>.</div>
                </div>
                <div className="innerTicketContainer">
                  <div className="subject">Subject: {prop.element.subject}</div>                
                  <div className="location">Location: {prop.element.location}</div>
                  <div className="contact">Contact: {prop.element.contact}</div>
                </div>
              </div>
    )
}