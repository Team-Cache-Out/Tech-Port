import React from "react";
import "./ticketBoard.css";
import Header from './header'
import Navbar from './navbar'
import { useContext } from "react"
import CampusContext from "../Context/CampusContext";
import Ticket from "./ticket";
import TicketCreatePage from '../ticketCreatePage/ticketCreate'
import SignInContext from "../Context/SignInContext";
import SingleTicketModal from "./singleTicketModal";

export default function TicketBoard() {
  const { currentUni } = useContext(SignInContext)

  const { HoustonOpenTickets, HoustonWorkingTickets, HoustonCompleteTickets, ArizonaOpenTickets, ArizonaWorkingTickets, ArizonaCompleteTickets, OregonOpenTickets, OregonWorkingTickets, OregonCompleteTickets, PepperdineOpenTickets,
  PepperdineWorkingTickets, PepperdineCompleteTickets } = useContext(CampusContext);

  const { activeComp, ticketModal } = useContext(CampusContext)

  const campus = [[HoustonOpenTickets, HoustonWorkingTickets, HoustonCompleteTickets],[ArizonaOpenTickets, ArizonaWorkingTickets, ArizonaCompleteTickets],[OregonOpenTickets, OregonWorkingTickets, OregonCompleteTickets],[PepperdineOpenTickets, PepperdineWorkingTickets, PepperdineCompleteTickets]]

  const currentCampus = () => {
    if(currentUni === 1) {
      return campus[0];
    }
    if(currentUni === 2) {
      return campus[1];
    }
    if(currentUni === 3) {
      return campus[2];
    }
    if(currentUni === 4) {
      return campus[3]
    }
  }

// <TicketCreatePage />
  if(activeComp === 'createTicket') {
      return (
          <div>
          <Header />
          <Navbar />
          <TicketCreatePage />
          </div>
      )
  } else if(activeComp === 'campusTechs') {
      return (
          <div>
          <Header />
          <Navbar />
          <h1>CampusTechs</h1>
          </div>
      )
  } else if(activeComp === 'campusReport') {
      return (
          <div>
          <Header />
          <Navbar />
          <h1>CampusReport</h1>
          </div>
      )
  } else if(activeComp === 'myTickets') {
      return (
          <div>
          <Header />
          <Navbar />
          <h1>MyTickets</h1>
          </div>
      )
  } else {
      return (
          <div>
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
                {currentCampus()[0].map((elem) => {
                  return (
                    <Ticket elem={elem} key={elem.ticket_id} />
                  ) 
                })}
                </div>
                <div className="boardColumn">
                {currentCampus()[1].map((elem) => {
                  return (
                    <Ticket elem={elem} key={elem.ticket_id} />
                  ) 
                })}
                </div>
                <div className="boardColumn">
                {currentCampus()[2].map((elem) => {
                  return (
                    <Ticket elem={elem} key={elem.ticket_id} />
                  ) 
                })}
                </div>
              </div>
            </div>
            <SingleTicketModal show={ticketModal} />
          </div>
      );
  }
}


