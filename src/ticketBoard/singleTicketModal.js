import React, { useContext } from 'react'
import CampusContext from '../Context/CampusContext'
import './ticketModal.css'

export default function SingleTicketModal({show}) {

    /* Destructuring the CampusContext object */
    const { setTicketModal, singleTicket, setSingleTicket } = useContext(CampusContext)

    /**
     * When the user clicks the close button, the ticket modal will close.
     */
    const handleClose = () => {
        setTicketModal(false)
    }

    const noteSubmit = () => {
        let data = {
            notes: addNote
        }

        let fetchData ={
            method: "PATCH",
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(data)
        }

        fetch(`https://worldwide-technical-foundation.herokuapp.com/notes/${singleTicket.ticket_id}`, fetchData)
        .then(response => response.json())
        .then(data => setSingleTicket(data))
        .catch(error => {
            console.error(error)
        })
    }

    const statusUpdate = () => {
        let data = {
            status
        }

        let fetchData ={
            method: "PATCH",
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(data)
        }

        fetch(`https://worldwide-technical-foundation.herokuapp.com/status/${singleTicket.ticket_id}`, fetchData)
        .then(response => response.json())
        .then(data => setSingleTicket(data))
        .catch(error => {
            console.error(error)
        })
    }

    let addNote = ''
    let status = singleTicket.status.toUpperCase()

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
                    <p>Notes: </p>
                    <div className='notes'>
                        {singleTicket.note.split(',').map((elem) => {
                        return (
                            <div>- {elem}</div>
                            )
                        })}
                    </div>
                    <form className='TicketForm' id='TicketForm'>
                            <label>Add Note</label>
                            <textarea rows = "10" cols = "80" name = "note" onChange={(e) => addNote = e.target.value} placeholder="Enter details here...">
                            </textarea>
                            </form>
                    <button className='SubmitNote-Button' id="SubmitTicket-Button" type='submit' onClick={noteSubmit}>Submit Note</button>
                    
                    <div className='update'>
                        <form> 
                            <label>Update Status:</label>
                            <select defaultValue={status} onChange={(e) => status = e.target.value}>
                            <option value={null} disabled>Choose status</option>
                            <option value="OPEN">Open</option>
                            <option value="WORKING">Working</option>
                            <option value="COMPLETE">Completed</option>
                            </select>
                        </form>
                        <button className='SubmitNote-Button' id="SubmitTicket-Button" type='submit' onClick={statusUpdate}>Update</button>
                    </div>
                </div>

            </div>
      : null}
      </>
    )
}