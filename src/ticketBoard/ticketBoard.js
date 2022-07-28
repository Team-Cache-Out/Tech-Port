import React from "react";
import "./ticketBoard.css";

export default function ticketBoard() {
  return (
    <>
      <nav className="TicketBoard">
        <a className="TicketBoard2">Tech</a>

        <h2 className="myCampus">Campus</h2>
        <a className="myName">Welcome name</a>
        <a className="ticketBoard3" href="/">
          Logout
        </a>
      </nav>
      <nav className="nav2">
        <a className="myTicketBoard" href="/ticketboard">
          Ticket board
        </a>
        <a className="myTicket1" href="/myticket">
          My ticket
        </a>
      </nav>
      <div className="ticketBoardContainer">
        <h1 className="ticketBoard-header">Ticket Board</h1>
        <hr />
        <h2 className="openTicket">Open</h2>
        <h2 className="workingTicket">Working</h2>
        <h2 className="openTicket">Completed</h2>
      </div>
    </>
  );
}
