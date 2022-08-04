import React, { useContext } from 'react'
import CampusContext from '../Context/CampusContext'
import './ticketModal.css'

export default function SingleTicketModal({show}) {

    const { setTicketModal, singleTicket } = useContext(CampusContext)

    const handleClose = () => {
        setTicketModal(false)
    }

    return (
        <>
        {show ?
            <div className='singleTicketContainer'>
                <div className='Ticket-Container'>
                    <button className='closeButton' onClick={handleClose}>X</button>
                    <h2 className='Ticket-Header'>Ticket Information</h2>
                    <h3>Open Date: {singleTicket.open_date.split('T')[0]} | Complete Date: {singleTicket.close_date ? singleTicket.close_date : 'Not Complete'} | Status: {singleTicket.status.toUpperCase()}</h3>
                    <h3>Tech Assigned: {singleTicket.assigned_tech ? 'Yes' : 'No'} | Location: {singleTicket.location} | POC: {singleTicket.point_of_contact}</h3>
                    <h3>Problem: {singleTicket.problem} | Description: {singleTicket.description} | Priority: {singleTicket.priority} </h3>
                    <p>Notes: {singleTicket.note}</p>
                    <form className='Ticket-Form' id='Ticket-Form'>
                            <label>Add Note</label>
                            <textarea rows = "5" cols = "50" name = "note" placeholder="Enter details here...">
                            </textarea>
                            </form>
                    <button className='SubmitTicket-Button' id="SubmitTicket-Button" type='submit'>Submit</button>
                            
                </div>
            </div>
      : null}
      </>
    )
}