import React from "react";
import "./ticketBoard.css";
import Header from './header'
import Navbar from './navbar'

export default function ticketBoard() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="ticketBoardContainer">
        <h1 className="ticketBoard-header">Ticket Board</h1>        
          <div className="boardRowPosition">
            <div className="boardColumnHeader">
              <h2 className="boardColumnH2">Open</h2>
            </div>  
            <div className="boardColumnHeader">
              <h2 className="boardColumnH2">Working</h2>
            </div>
            <div className="boardColumnHeader">
              <h2 className="boardColumnH2">Completed</h2>
            </div>
          </div>
          <div className="boardColumnContainer">
            <div className="boardColumn">
              <div className="ticket">
                <div className="innerTicketContainerLeft">
                  <div className="priorityCircleRed">.</div>
                </div>
                <div className="innerTicketContainer">
                  <div className="subject">Subject: its broke</div>                
                  <div className="location">Location: my desk</div>
                  <div className="contact">Contact: me</div>
                </div>
                <div className="innerTicketContainerRight">
                  <div className="startTicketDiv"><button className="startTicket">start</button></div>
                </div>
              </div>
              <div className="ticket">
                <div className="innerTicketContainerLeft">
                  <div className="priorityCircleYellow">.</div>
                </div>
                <div className="innerTicketContainer">
                  <div className="subject">Subject: its broke</div>                
                  <div className="location">Location: my desk</div>
                  <div className="contact">Contact: me</div>
                </div>
                <div className="innerTicketContainerRight">
                  <div className="startTicketDiv"><button className="startTicket">start</button></div>
                </div>
              </div>
              <div className="ticket">
                <div className="innerTicketContainerLeft">
                  <div className="priorityCircleGreen">.</div>
                </div>
                <div className="innerTicketContainer">
                  <div className="subject">Subject: its broke</div>                
                  <div className="location">Location: my desk</div>
                  <div className="contact">Contact: me</div>
                </div>
                <div className="innerTicketContainerRight">
                  <div className="startTicketDiv"><button className="startTicket">start</button></div>
                </div>
              </div>
            </div>
            <div className="boardColumn"><div className="ticket">
                <div className="innerTicketContainerLeft">
                  <div className="priorityCircleRed">.</div>
                </div>
                <div className="innerTicketContainer">
                  <div className="subject">Subject: its broke</div>                
                  <div className="location">Location: my desk</div>
                  <div className="contact">Contact: me</div>
                </div>
                <div className="innerTicketContainerRight">
                  <div className="startTicketDiv"><button className="startTicket">start</button></div>
                </div>
              </div>
              <div className="ticket">
                <div className="innerTicketContainerLeft">
                  <div className="priorityCircleYellow">.</div>
                </div>
                <div className="innerTicketContainer">
                  <div className="subject">Subject: its broke</div>                
                  <div className="location">Location: my desk</div>
                  <div className="contact">Contact: me</div>
                </div>
                <div className="innerTicketContainerRight">
                  <div className="startTicketDiv"><button className="startTicket">start</button></div>
                </div>
              </div>
              <div className="ticket">
                <div className="innerTicketContainerLeft">
                  <div className="priorityCircleGreen">.</div>
                </div>
                <div className="innerTicketContainer">
                  <div className="subject">Subject: its broke</div>                
                  <div className="location">Location: my desk</div>
                  <div className="contact">Contact: me</div>
                </div>
                <div className="innerTicketContainerRight">
                  <div className="startTicketDiv"><button className="startTicket">start</button></div>
                </div>
              </div></div>
            <div className="boardColumn"><div className="ticket">
                <div className="innerTicketContainerLeft">
                  <div className="priorityCircleRed">.</div>
                </div>
                <div className="innerTicketContainer">
                  <div className="subject">Subject: its broke</div>                
                  <div className="location">Location: my desk</div>
                  <div className="contact">Contact: me</div>
                </div>
                <div className="innerTicketContainerRight">
                  <div className="startTicketDiv"><button className="startTicket">start</button></div>
                </div>
              </div>
              <div className="ticket">
                <div className="innerTicketContainerLeft">
                  <div className="priorityCircleYellow">.</div>
                </div>
                <div className="innerTicketContainer">
                  <div className="subject">Subject: its broke</div>                
                  <div className="location">Location: my desk</div>
                  <div className="contact">Contact: me</div>
                </div>
                <div className="innerTicketContainerRight">
                  <div className="startTicketDiv"><button className="startTicket">start</button></div>
                </div>
              </div>
              <div className="ticket">
                <div className="innerTicketContainerLeft">
                  <div className="priorityCircleGreen">.</div>
                </div>
                <div className="innerTicketContainer">
                  <div className="subject">Subject: its broke</div>                
                  <div className="location">Location: my desk</div>
                  <div className="contact">Contact: me</div>
                </div>
                <div className="innerTicketContainerRight">
                  <div className="startTicketDiv"><button className="startTicket">start</button></div>
                </div>
              </div></div>
          </div>
      </div>
    </>
  );
}
