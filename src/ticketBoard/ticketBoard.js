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
import MyTickets from "../myTickets/MyTickets";
import CampusReport from "../campusReport/CampusReport";
import CampusTechs from "../campusTechs/campusTechs";

export default function TicketBoard() {
  /* Destructuring the currentUni from the SignInContext. */
  const { currentUni } = useContext(SignInContext)

  /* Destructuring the CampusContext and assigning the values to the variables. */
  const { HoustonOpenTickets, HoustonWorkingTickets, HoustonCompleteTickets, ArizonaOpenTickets, ArizonaWorkingTickets, ArizonaCompleteTickets, OregonOpenTickets, OregonWorkingTickets, OregonCompleteTickets, PepperdineOpenTickets,
  PepperdineWorkingTickets, PepperdineCompleteTickets } = useContext(CampusContext);

  /* Destructuring the CampusContext and assigning the values to the variables. */
  const { activeComp, ticketModal } = useContext(CampusContext)

  /* Creating an array of arrays. Each array is a campus. Each campus has three arrays. The first array
  is the open tickets, the second array is the working tickets, and the third array is the completed
  tickets. */
  const campus = [[HoustonOpenTickets, HoustonWorkingTickets, HoustonCompleteTickets],[ArizonaOpenTickets, ArizonaWorkingTickets, ArizonaCompleteTickets],[OregonOpenTickets, OregonWorkingTickets, OregonCompleteTickets],[PepperdineOpenTickets, PepperdineWorkingTickets, PepperdineCompleteTickets]]

  /**
   * If the currentUni is equal to 1, return the first element of the campus array. 
   * If the currentUni is equal to 2, return the second element of the campus array. 
   * If the currentUni is equal to 3, return the third element of the campus array. 
   * If the currentUni is equal to 4, return the fourth element of the campus array
   * @returns the value of the array at the index of the currentUni variable.
   */
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

  let currentUniversity = currentCampus()

  /** Contional that checks what the active component is set to and returns the appropriate components based off of 
  * that active component variable. The activeComp variable is influenced by the user clicking on the different 
  * elements in their perspective navbar.
  */
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
          <CampusTechs />
          </div>
      )
  } else if(activeComp === 'campusReport') {
      return (
          <div>
          <Header />
          <Navbar />
          <CampusReport />
          </div>
      )
  } else if(activeComp === 'myTickets') {
      return (
          <div>
          <Header />
          <Navbar />
          <MyTickets />
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
                {currentUniversity[0].map((elem) => {
                  return (
                    <Ticket elem={elem} key={elem.ticket_id} />
                  ) 
                })}
                </div>
                <div className="boardColumn">
                {currentUniversity[1].map((elem) => {
                  return (
                    <Ticket elem={elem} key={elem.ticket_id} />
                  ) 
                })}
                </div>
                <div className="boardColumn">
                {currentUniversity[2].map((elem) => {
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


