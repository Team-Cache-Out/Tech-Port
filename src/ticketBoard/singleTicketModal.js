import React, { useContext, useState } from 'react'
import CampusContext from '../Context/CampusContext'
import SignInContext from '../Context/SignInContext'
import './ticketModal.css'

export default function SingleTicketModal({show}) {

    /* Destructuring the CampusContext object */
    const { setTicketModal, singleTicket, setSingleTicket } = useContext(CampusContext)

    const { HoustonTechs, ArizonaTechs, OregonTechs, PepperdineTechs } = useContext(CampusContext)

    const { user, currentUni } = useContext(SignInContext)

    const [tech, setTech] = useState(null)

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

    /**
     * If the currentUni is 1, return HoustonTechs. 
     * If the currentUni is 2, return ArizonaTechs. 
     * If the currentUni is 3, return OregonTechs. 
     * If the currentUni is 4, return PepperdineTechs.
     * @returns the value of the variable HoustonTechs, ArizonaTechs, OregonTechs, or PepperdineTechs.
     */
    const currentTechs = () => {
        if(currentUni === 1) {
            return HoustonTechs;
        }
        if(currentUni === 2) {
            return ArizonaTechs;
        }
        if(currentUni === 3) {
            return OregonTechs;
        }
        if(currentUni === 4) {
            return PepperdineTechs;
        }
    }

    /**
     * This function takes in the selected tech and assigns them to the ticket that is currently being rendered.
     * Then it returns the data from that requests and updates the currently rendered ticket.
     */
    const assign = () => {
        let data = {
            assigned_tech: tech
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

        setTech('')
    }

    /**
     * It takes the ticket_id from the ticket that was clicked on and sends a PATCH request to the
     * server with the user_id of the user who clicked the button.
     */
    const claim = () => {
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

    /**
     * If the user is an admin and the ticket is open, display a dropdown menu of technicians to assign
     * the ticket to. 
     * If the user is a tech and the ticket is open, display a button to claim the ticket.
     * @returns The return is a function that is being called in the render.
     */
    const roleRights = () => {
        
        if(user.role === 'admin' && singleTicket.status === 'open') {
            return (
                <div className='assign'>
                <form>
                    <label>Assign Ticket:</label>
                    <select value={tech} onChange={(e) => setTech(e.target.value)} >
                    <option value={null}>Choose Technician</option>
                        {currentTechs().map((elem) => {
                            return (
                                <option value={elem.user_id}>{elem.name}</option>
                            )
                        })}
                    </select>
                </form>
                <button className='SubmitNote-Button' id="SubmitTicket-Button" type='submit' onClick={assign}>Update</button>
                </div>
            )
        } else if(user.role === 'tech' && singleTicket.status === 'open') {
            return  (
                <div className='assign'>
                    <form>
                        <label>Claim Ticket</label>
                    </form>
                    <button className='SubmitNote-Button' id="SubmitTicket-Button" type='submit' onClick={claim}>Claim</button>
                </div>
            )
        }
    }

    const statusChange = () => {
        if(singleTicket.status === 'working') {
            return (
                <div className='update'>
                    <form> 
                        <label>Complete Ticket</label>
                    </form>
                    <button className='SubmitNote-Button' id="SubmitTicket-Button" type='submit' onClick={statusUpdate}>Update</button>
                </div>
            )
        }
    }

    const complete = () => {
        if(singleTicket.close_date !== null) {
            return singleTicket.close_date.split('T')[0]
        } else {
            return 'Not Complete'
        }
    }

    return (
        <div>
        {/* A ternary operator that checks the current value of the show property and renders the appropriate elements */}
        {show ?
            /* The div container that gives the page a transparent look. */
            <div className='singleTicketContainer'>

                {/* A div that contains the ticket information. This is the actual modal that is being rendered on the screen. */}
                <div className='TicketContainer'>
                    <button className='closeButton' onClick={handleClose}>X</button>
                    <h2 className='TicketHeader'>Ticket Information</h2>
                    <h3>Open Date: {singleTicket.open_date.split('T')[0]} | Complete Date: {complete()} | Status: {singleTicket.status.toUpperCase()}</h3>
                    <h3>Tech Assigned: {singleTicket.assigned_tech ? 'Yes' : 'No'} | Location: {singleTicket.location} | POC: {singleTicket.point_of_contact}</h3>
                    <h3>Problem: {singleTicket.problem} | Description: {singleTicket.description} | Priority: {singleTicket.priority} </h3>
                    <p>Notes: </p>
                    <div className='notes'>
                        {singleTicket.note.split(',').map((elem) => {
                        return (
                            <div>{elem}</div>
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
                        
                        {roleRights()}

                        {statusChange()}

                    </div>
                </div>

            </div>
      : null}
      </div>
    )
}