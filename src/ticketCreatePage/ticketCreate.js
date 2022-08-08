import './ticketCreate.css'
import SignInContext from '../Context/SignInContext'
import { useContext } from 'react'

export default function TicketCreatePage() {

    const { currentUni } = useContext(SignInContext)

    let problem = '';
    let description = '';
    let point_of_contact = '';
    let location = '';
    let priority = '';
    let status = 'open';
    let university_id = currentUni;

    console.log(problem)
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

        problem = ''
        description = '';
        point_of_contact = '';
        location = '';
        priority = '';
    }

    return (
        <div className='Ticket-Container'>
        <h2 className='Ticket-Header'>Create a ticket</h2>
        <form className='Ticket-Form' id='Ticket-Form'>
  
          <div className="selections">
          <div className="createSubject">
          <label>Subject:</label>
          <input className='Subject-Input' id='Subject-email' onChange={(e) => problem = e.target.value} >
          </input>
              </div>
         
              <div className="createLocation">
              <label>Location:</label>
              <input className='Location-Input' onChange={(e) => location = e.target.value} ></input>
              </div>
   
              <div className="CreateContactInfo">
                  <label>Contact Info:</label>
                  <input className='Contact-Input' onChange={(e) => point_of_contact = e.target.value} > 
                  </input>
                  </div>
                  
                  <div className="createPriority">
                  <label>Priority:</label>
                  <select onChange={(e) => priority = e.target.value}>
                  <option>Urgent</option>
                  <option>Severe</option>
                  <option>Routine</option>
                  </select>
                  </div>
                  </div>
              <label>Description</label>
              <textarea className='descriptionText' rows = "10" cols = "60" name = "description" onChange={(e) => description = e.target.value} placeholder="Enter details here...">
                  
              </textarea>
              <button className='SubmitTicket-Button' id="SubmitTicket-Button" type='submit' onClick={create}>Submit
              </button>
  
            
        </form>
        
      </div>
    )
};