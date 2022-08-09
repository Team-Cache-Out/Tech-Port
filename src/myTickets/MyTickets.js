import React from "react";
import { useContext } from "react";
import SignInContext from "../Context/SignInContext";
import CampusContext from "../Context/CampusContext";
import "./MyTickets.css";
import SingleTicketModal from "../ticketBoard/singleTicketModal";
import Ticket from "../ticketBoard/ticket";

export default function MyTickets() {
  const { user, currentUni } = useContext(SignInContext);

  const {
    HoustonOpenTickets,
    HoustonCompleteTickets,
    ArizonaOpenTickets,
    ArizonaCompleteTickets,
    OregonOpenTickets,
    OregonCompleteTickets,
    PepperdineOpenTickets,
    PepperdineCompleteTickets,
  } = useContext(CampusContext);

  const { activeComp, ticketModal } = useContext(CampusContext);

  const campus = [
    [HoustonOpenTickets, HoustonCompleteTickets],
    [ArizonaOpenTickets, ArizonaCompleteTickets],
    [OregonOpenTickets, OregonCompleteTickets],
    [PepperdineOpenTickets, PepperdineCompleteTickets],
  ];

  const currentCampus = () => {
    if (currentUni === 1) {
      return campus[0];
    }
    if (currentUni === 2) {
      return campus[1];
    }
    if (currentUni === 3) {
      return campus[2];
    }
    if (currentUni === 4) {
      return campus[3];
    }
  };
  console.log(user.role);
  let currentUniversity = currentCampus();
  console.log(currentUni);
  const { singleTicket } = useContext(CampusContext);
  console.log(tickets.university_id);

  if (activeComp === "myTickets") {
    return (
      <div>
        <div className="myTicketBoardContainer">
          <h1 className="myTicketBoard-header">Ticket Board</h1>
          <div className="myBoardRowPosition">
            <div className="myBoardColumnHeader">
              <h2 className="myBoardColumnH2">Open</h2>
            </div>
            <div className="myBoardColumnHeader">
              <h2 className="myBoardColumnH2">Completed</h2>
            </div>
          </div>
          <div className="myBoardColumnContainer">
            <div className="myBoardColumn">
              {currentUniversity.map((elem) => {
                return <Ticket elem={elem} key={elem.university_id} />;
              })}
            </div>
            <div className="myBoardColumn">
              {currentUniversity.map((elem) => {
                return <Ticket elem={elem} key={elem.ticket_id} />;
              })}
            </div>
          </div>
        </div>
        <SingleTicketModal show={ticketModal} />
      </div>
    );
  }
}
