import React from "react";
import "./ticketBoard.css";
import Header from './header'
import Navbar from './navbar'
import { useContext } from "react"
import CampusContext from "../Context/CampusContext";
// import Ticket from "./ticket";
import TicketCreatePage from '../ticketCreatePage/ticketCreate'
import SignInContext from "../login-page/SignInContext";
import SingleTicketModal from "./singleTicketModal";

export default function TicketBoard() {
  const { currentUni } = useContext(SignInContext)

  const { HoustonOpenTickets, HoustonWorkingTickets, HoustonCompleteTickets } =
    useContext(CampusContext);
  const { ArizonaOpenTickets, ArizonaWorkingTickets, ArizonaCompleteTickets } =
    useContext(CampusContext);
  const { OregonOpenTickets, OregonWorkingTickets, OregonCompleteTickets } =
    useContext(CampusContext);
  const {
    PepperdineOpenTickets,
    PepperdineWorkingTickets,
    PepperdineCompleteTickets,
  } = useContext(CampusContext);

  const { activeComp, ticketModal } = useContext(CampusContext)


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
              {/* <Ticket />*/}
              <div>Hello</div>
              </div>
              <div className="boardColumn">
              {/* <Ticket />*/}
              </div>
              <div className="boardColumn">
              {/* <Ticket />*/}
              </div>
            </div>
          </div>
          <SingleTicketModal show={ticketModal} />
        </div>
    );
  }
}


