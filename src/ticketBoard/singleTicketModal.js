import React, { useContext } from 'react'
import CampusContext from '../Context/CampusContext'
import './ticketModal.css'

export default function SingleTicketModal({show}) {

    /* Destructuring the CampusContext object */
    const { setTicketModal, singleTicket } = useContext(CampusContext)

    /**
     * When the user clicks the close button, the ticket modal will close.
     */
    const handleClose = () => {
        setTicketModal(false)
    }

    return (
        <>
        {/* A ternary operator that checks the current value of the show property and renders the appropriate elements */}
        {show ?
            /* The div container that gives the page a transparent look. */
            <div className='singleTicketContainer'>

                {/* A div that contains the ticket information. This is the actual modal that is being rendered on the screen. */}
                <div className='TicketContainer'>
                    <button className='closeButton' onClick={handleClose}>X</button>
                    <h2 className='TicketHeader'>Ticket Information</h2>
                    <h3>Open Date: {singleTicket.open_date.split('T')[0]} | Complete Date: {singleTicket.close_date ? singleTicket.close_date : 'Not Complete'} | Status: {singleTicket.status.toUpperCase()}</h3>
                    <h3>Tech Assigned: {singleTicket.assigned_tech ? 'Yes' : 'No'} | Location: {singleTicket.location} | POC: {singleTicket.point_of_contact}</h3>
                    <h3>Problem: {singleTicket.problem} | Description: {singleTicket.description} | Priority: {singleTicket.priority} </h3>
                    <p>Notes: {singleTicket.note}</p>
                    <form className='TicketForm' id='TicketForm'>
                            <label>Add Note</label>
                            <textarea rows = "5" cols = "50" name = "note" placeholder="Enter details here...">
                            </textarea>
                            </form>
                    <button className='SubmitNote-Button' id="SubmitTicket-Button" type='submit'>Submit Changes</button>
                            
                </div>
            </div>
      : null}
      </>
    )
}