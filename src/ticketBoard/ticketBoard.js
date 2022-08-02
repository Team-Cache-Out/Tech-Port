import React from "react";
import "./ticketBoard.css";
import { Route } from "react-router-dom";
import TicketCreatePage from "../ticketCreatePage/ticketCreate";

export default function ticketBoard() {
  return (
    <>
      <nav className="nav1">
        <div className="leftPosition">
          <a className="tech">Tech</a>
        </div>
        <div className="centerPosition">
        <h2 className="myCampus">Campus</h2>
        </div>
        <div className="rightPosition">
          <div className="columnPosition">
            <a className="myName">Welcome Name</a>
            <a className="logout" href="/">Logout</a>
          </div>
        </div>
        
      </nav>
      <nav className="nav2">
        <div className="nav2Center">
        <a className="navLinks" href="/ticketboard">
          Ticket Board
        </a>
        <a className="navLinks" href="/myticket">
          My Tickets
        </a>        
        <a className="navLinks" href="/newticket">
          Create Ticket
        </a>   
        </div>
      </nav>
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
      <Route exact path='/createticket' element={
        <>
        <TicketCreatePage />
        </>
      }></Route>
    </>
  );
}
