

export default function TicketModal() {
    return (
        <div className='Ticket-Container'>
      <h2 className='Ticket-Header'>Create a ticket</h2>
      <form className='Ticket-Form' id='Ticket-Form'>
          <label>Subject</label>
          <input placeholder='Subject...' className='Subject-Input' id='Subject-email' >
          </input>
          {/* <br/>
          <br/> */}
          <label>Location</label>
          {/* <br></br> */}
          <input placeholder='Location...' className='Location-Input'> 
          </input>
          {/* <br/>
          <br></br> */}
          <label>Contact Info</label>
          {/* <br></br> */}
          <input placeholder='Contact Info...' className='Contact-Input' > 
          </input>
          {/* <br/>
          <br></br> */}
          <label>Priority</label>
          <select>
              <option>Urgent</option>
              <option>Severe</option>
              <option>Routine</option>
          </select>
          <label>Description</label>
          <textarea rows = "5" cols = "50" name = "description" placeholder="Enter details here...">
            
         </textarea>
          <button className='SubmitTicket-Button' id="SubmitTicket-Button" type='submit'>Submit
          </button>
          <br/>
          
      </form>
      
    </div>
    )
}