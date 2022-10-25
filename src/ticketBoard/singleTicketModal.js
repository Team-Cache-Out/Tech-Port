import React, { useContext, useEffect, useState } from 'react'
import CampusContext from '../Context/CampusContext'
import SignInContext from '../Context/SignInContext'
import './ticketModal.css'

export default function SingleTicketModal() {

    /* Destructuring the CampusContext object */
    const { setTicketModal, singleTicket, setSingleTicket } = useContext(CampusContext)

    /* Destructuring the CampusContext object. */
    const { HoustonTechs, ArizonaTechs, OregonTechs, PepperdineTechs } = useContext(CampusContext)

    /* Destructuring the SignInContext object. */
    const { user, currentUni } = useContext(SignInContext)

    /* Setting the value of the variable tech to null. */
    const [tech, setTech] = useState('')
    const [addnote, setAddNote] = useState('')

    /* Setting the value of the variable ticket to an empty string. */
    const [ticket, setTicket] = useState('')

    /* Setting the value of the variable ticket to the value of the variable singleTicket. */
    useEffect(() => {
        setTicket(singleTicket)
    }, [])

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
    const noteSubmit = (e) => {
        e.preventDefault();
        // console.log(addnote)
        let data = {
            notes: addnote
        }

        let fetchData = {
            method: "PATCH",
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(data)
        }
        // console.log(singleTicket.ticket_id)
        fetch(`https://techport.onrender.com/notes/${ticket.ticket_id}`, fetchData)
            .then(response => response.json())
            .then(data => {
                setSingleTicket(data)
            })
            .then(() => { setTicketModal(false) })
            .catch(error => {
                console.error(error)
            })
    }


    /**
     * It takes the status of the ticket and updates it in the database.
     */
    const statusUpdate = (e) => {
        e.preventDefault();
        let data = {
            status: 'complete'
        }

        let fetchData = {
            method: "PATCH",
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(data)
        }

        fetch(`https://techport.onrender.com/status/${ticket.ticket_id}`, fetchData)
            .then(() => { handleClose() })
    }

    /**
     * If the currentUni is 1, return HoustonTechs. 
     * If the currentUni is 2, return ArizonaTechs. 
     * If the currentUni is 3, return OregonTechs. 
     * If the currentUni is 4, return PepperdineTechs.
     * @returns the value of the variable HoustonTechs, ArizonaTechs, OregonTechs, or PepperdineTechs.
     */
    const currentTechs = () => {
        if (currentUni === 1) {
            return HoustonTechs;
        }
        if (currentUni === 2) {
            return ArizonaTechs;
        }
        if (currentUni === 3) {
            return OregonTechs;
        }
        if (currentUni === 4) {
            return PepperdineTechs;
        }
    }

    /**
     * This function takes in the selected tech and assigns them to the ticket that is currently being rendered.
     * Then it returns the data from that requests and updates the currently rendered ticket.
     */
    const assign = (e) => {
        e.preventDefault();
        let data = {
            assigned_tech: tech
        }

        let fetchData = {
            method: "PATCH",
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(data)
        }

        fetch(`https://techport.onrender.com/assign/${ticket.ticket_id}`, fetchData)
            .then(() => { handleClose() })
            .catch(error => {
                console.error(error)
            })

        setTech('')
    }

    /**
     * It takes the ticket_id from the ticket that was clicked on and sends a PATCH request to the
     * server with the user_id of the user who clicked the button.
     */
    const claim = (e) => {
        e.preventDefault();
        let data = {
            assigned_tech: user.user_id
        }

        let fetchData = {
            method: "PATCH",
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(data)
        }

        fetch(`https://techport.onrender.com/assign/${singleTicket.ticket_id}`, fetchData)
            .then(() => { handleClose() })
            .catch(error => {
                console.error(error)
            })
    }

    /**
     * If the user is an admin and the ticket is open, display a dropdown menu of technicians to assign
     * the ticket to. 
     * If the user is a tech and the ticket is open, display a button to claim the ticket.
     * @returns The return is a function that is being called in the render.
     */
    const roleRights = () => {

        if (user.role === 'admin' && ticket.status === 'open') {
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
                    <button className='SubmitNote-Button' id="SubmitTicket-Button" type='submit' onClick={assign} disabled>Update</button>
                </div>
            )
        } else if (user.role === 'tech' && ticket.status === 'open') {
            return (
                <div className='assign'>
                    <form>
                        <label>Claim Ticket</label>
                    </form>
                    <button className='SubmitNote-Button' id="SubmitTicket-Button" type='submit' onClick={claim} disabled>Claim</button>
                </div>
            )
        }
    }

    /**
     * If the status of the ticket is 'working', then return a form with a button that will update the
     * status of the ticket to 'complete'.
     * @returns The statusChange function is returning a div with a form and a button.
     */
    const statusChange = () => {
        if (ticket.status === 'working') {
            return (
                <div className='update'>
                    <form>
                        <label>Complete Ticket</label>
                    </form>
                    <button className='SubmitNote-Button' id="SubmitTicket-Button" type='submit' onClick={statusUpdate} disabled>Submit</button>
                </div>
            )
        }
    }

    /**
     * If the close_date is not null, return the date, otherwise return 'Not Complete'
     * @returns The date the ticket was closed.
     */
    const complete = () => {
        if (ticket.close_date === undefined || ticket.close_date === null) {
            return 'Not Complete';
        } else {
            return ticket.close_date.split('T')[0]
        }
    }

    /**
     * If the open_date is undefined or null, return an empty string. Otherwise, return the open_date
     * split at the 'T' character.
     * @returns The date in the format of YYYY-MM-DD
     */
    const open = () => {
        if (ticket.open_date !== undefined || ticket.open_date !== null) {
            return ticket.open_date
        } else {
            return '';
        }
    }

    /**
     * If the status is undefined or null, return an empty string, otherwise return the status in
     * uppercase.
     * @returns The value of the status property of the singleTicket object.
     */
    const current = () => {
        if (ticket.status === undefined || ticket.status === null) {
            return '';
        } else {
            return ticket.status.toUpperCase();
        }
    }

    /**
     * If the note property of the singleTicket object is not an empty string, then split the note
     * property by commas and map over the resulting array, returning a div for each element.
     * @returns An array of divs.
     */
    const notes = () => {
        if (ticket.note !== undefined) {
            return (

                ticket.note.split(',').map((elem) => {
                    return (
                        <div>- {elem}</div>
                    )
                })
            )
        } else {
            return '';
        }
    }

    return (
        <div>
            {/* A ternary operator that checks the current value of the show property and renders the appropriate elements */}
            {/* The div container that gives the page a transparent look. */}
            <div className='singleTicketContainer'>

                {/* A div that contains the ticket information. This is the actual modal that is being rendered on the screen. */}
                <div className='TicketContainer'>
                    <button className='closeButton' onClick={handleClose}>X</button>
                    <h2 className='TicketHeader'>Ticket Information</h2>
                    <h3>Open Date: {open()} | Complete Date: {complete()} | Status: {current()}</h3>
                    <h3>Tech Assigned: {ticket.assigned_tech ? 'Yes' : 'No'} | Location: {ticket.location} | POC: {ticket.point_of_contact}</h3>
                    <h3>Problem: {ticket.problem} | Description: {ticket.description} | Priority: {ticket.priority} </h3>
                    <p>Notes: </p>
                    <div className='notes'>
                        {notes()}
                    </div>
                    <div className='TicketForm' id='TicketForm'>
                        <label>Add Note</label>
                        <textarea rows="10" cols="80" name="note" onChange={(e) => setAddNote(e.target.value)} placeholder="Enter details here..." disabled>
                        </textarea>
                    </div>
                    <button className='SubmitNote-Button' id="SubmitTicket-Button" type='submit' onClick={noteSubmit} disabled>Submit Note</button>

                    <div className='selections'>

                        {roleRights()}

                        {statusChange()}

                    </div>
                </div>

            </div>
        </div>
    )
}