import React, { useContext } from 'react'
import CampusContext from '../Context/CampusContext'
import SignInContext from '../Context/SignInContext'
import './ticketModal.css'

export default function SingleTicketModal({show}) {

    /* Destructuring the CampusContext object */
    const { setTicketModal, singleTicket, setSingleTicket } = useContext(CampusContext)

    const { user } = useContext(SignInContext)

    /**
     * When the user clicks the close button, the ticket modal will close.
     */
    const handleClose = () => {
        setTicketModal(false)
    }

   /**
    * It takes the value of the input field, adds it to an object, then sends it to the server via a
    * PATCH request.
    */
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
        console.log(singleTicket)
    }


   /**
    * It takes the status of the ticket and updates it in the database.
    */

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


    const assign = () => {

    }

    const claim = () => {
        console.log(user.user_id, singleTicket.ticket_id)
        let data = {
            assigned_tech: user.user_id
        }

        let fetchData ={
            method: "PATCH",
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(data)
        }

        fetch(`https://worldwide-technical-foundation.herokuapp.com/assign/${singleTicket.ticket_id}`, fetchData)
        .then(response => response.json())
        .then(data => setSingleTicket(data))
        .catch(error => {
            console.error(error)
        })
    }

    /* Setting the value of the variable addNote to an empty string. */
    let addNote = ''
    /* Setting the value of the variable status to the value of the singleTicket.status property. */
    let status = singleTicket.status

    const roleRights = () => {
        
        if(user.role === 'admin') {
            return (
                <div>
                <form>
                    <label>Assign Ticket:</label>
                    <select defaultValue={null} >
            
                    </select>
                </form>
                <button className='SubmitNote-Button' id="SubmitTicket-Button" type='submit' onClick={assign}>Update</button>
                </div>
            )
        } else {
            return  (
                <div>
                <form>
                    <label>Claim Ticket</label>
                </form>
                <button className='SubmitNote-Button' id="SubmitTicket-Button" type='submit' onClick={claim}>Claim</button>
                </div>
            )
        }
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
                    <h3>Open Date: {singleTicket.open_date.split('T')[0]} | Complete Date: {singleTicket.close_date ? singleTicket.close_date.split('T')[0] : 'Not Complete'} | Status: {singleTicket.status.toUpperCase()}</h3>
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


                    <div className='selections'>
                        <div className='assign'>
                            {roleRights()}
                        </div>

                        <div className='update'>
                            <form> 
                                <label>Update Status:</label>
                                <select defaultValue={status} onChange={(e) => status = e.target.value}>
                                <option value={null} disabled>Choose status</option>
                                <option value="open">Open</option>
                                <option value="working">Working</option>
                                <option value="complete">Completed</option>
                                </select>
                            </form>
                            <button className='SubmitNote-Button' id="SubmitTicket-Button" type='submit' onClick={statusUpdate}>Update</button>
                        </div>


                    </div>
                </div>

            </div>
      : null}
      </>
    )
}