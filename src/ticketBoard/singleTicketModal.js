import React, { useContext } from 'react'
import CampusContext from '../Context/CampusContext'
import './ticketModal.css'

export default function SingleTicketModal({show}) {

    const { setTicketModal } = useContext(CampusContext)

    const handleClose = () => {
        setTicketModal(false)
    }

    return (
        <>
        {show ?
            <div className='singleTicketContainer'>
            <div className='Ticket-Container'>
            <button className='closeButton' onClick={handleClose}>X</button>
            <h2 className='Ticket-Header'>Create a ticket</h2>
            <form className='Ticket-Form' id='Ticket-Form'>
          <label>Subject</label>
          <div className='Subject-Input' id='Subject-email' >
          </div>
          
          <label>Location</label>
      
          <input placeholder='Location...' className='Location-Input'> 
          </input>
         
          <label>Contact Info</label>
        
          <input placeholder='Contact Info...' className='Contact-Input' > 
          </input>
          
          <label>Priority</label>
          <select>
              <option>Urgent</option>
              <option>Severe</option>
              <option>Routine</option>
              </select>
              <label>Description</label>
              <textarea rows = "5" cols = "50" name = "note" placeholder="Enter details here...">
              
              </textarea>
          <button className='SubmitTicket-Button' id="SubmitTicket-Button" type='submit'>Submit
          </button>
          <br/>
          
      </form>
      
      </div>
      </div>
      : null}
      </>
    )
}