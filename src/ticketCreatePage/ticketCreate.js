import './ticketCreate.css'
import SignInContext from '../Context/SignInContext'
import { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'

export default function TicketCreatePage() {

    const { currentUni } = useContext(SignInContext)

    const [problem, setProblem] = useState('')
    const [description, setDescription] = useState('')
    const [point_of_contact, setPoint_of_contact] = useState('')
    const [location, setLocation] = useState('')
    const [priority, setPriority] = useState('')

    let status = 'open';
    let university_id = currentUni;

    const create = (e) => {
        e.preventDefault()
        const data = {
            problem,
            location,
            point_of_contact,
            priority,
            status,
            description,
            university_id
        }

        let fetchData = {
            method: "POST",
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(data)
        }

        fetch('https://worldwide-technical-foundation.herokuapp.com/tickets', fetchData)
        .then(() => {
            window.alert('Ticket Created!')
        })
        .catch(error => {
            console.error(error)
        })

        setProblem('')
        setPoint_of_contact('')
        setDescription('')
        setLocation('')
        setPriority('')
    }

    return (
        <div className='Ticket-Container'>
        <h2 className='Ticket-Header'>Create a ticket</h2>
        <form className='Ticket-Form' id='Ticket-Form'>
  
          <div className="select">
          <div className="createSubject">
          <label>Subject:</label>
          <input className='Subject-Input' id='Subject-email' value={problem} onChange={(e) => setProblem(e.target.value)} >
          </input>
              </div>
         
              <div className="createLocation">
              <label>Location:</label>
              <input className='Location-Input' value={location} onChange={(e) => setLocation(e.target.value)} ></input>
              </div>
   
              <div className="CreateContactInfo">
                  <label>Contact Info:</label>
                  <input className='Contact-Input' value={point_of_contact} onChange={(e) => setPoint_of_contact(e.target.value)} > 
                  </input>
                  </div>
                  
                  <div className="createPriority">
                  <label>Priority:</label>
                  <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                  <option value={null}>Choose Priority</option>
                  <option value={'Urgent'}>Urgent</option>
                  <option value={'severe'}>Severe</option>
                  <option value={'Routine'}>Routine</option>
                  </select>
                  </div>
                  </div>
              <label>Description</label>
              <textarea className='descriptionText' rows = "10" cols = "60" name = "description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter details here...">
                  
              </textarea>
              <button className='SubmitTicket-Button' id="SubmitTicket-Button" type='submit' onClick={create}>Submit
              </button>
  
            
        </form>
        
      </div>
    )
};