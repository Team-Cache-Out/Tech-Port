

export default function TicketModal() {
    return (
        <div className='Ticket-Container'>
      <h2 className='Ticket-Header'>Create a ticket</h2>
      <form className='Ticket-Form' id='Ticket-Form'>

        <div className="selections">
        <div className="createSubject">
        <label>Subject:</label>
        <input className='Subject-Input' id='Subject-email' >
        </input>
            </div>
       
            <div className="createLocation">
            <label>Location:</label>
            <input className='Location-Input'></input>
            </div>
 
            <div className="CreateContactInfo">
                <label>Contact Info:</label>
                <input className='Contact-Input' > 
                </input>
                </div>
                
                <div className="createPriority">
                <label>Priority:</label>
                <select>
                <option>Urgent</option>
                <option>Severe</option>
                <option>Routine</option>
                </select>
                </div>
                </div>
            <label>Description</label>
            <textarea rows = "10" cols = "60" name = "description" placeholder="Enter details here...">
                
            </textarea>
            <button className='SubmitTicket-Button' id="SubmitTicket-Button" type='submit'>Submit
            </button>

          
      </form>
      
    </div>
    )
}