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
    HoustonWorkingTickets,
    HoustonCompleteTickets,
    ArizonaWorkingTickets,
    ArizonaCompleteTickets,
    OregonWorkingTickets,
    OregonCompleteTickets,
    PepperdineWorkingTickets,
    PepperdineCompleteTickets,
  } = useContext(CampusContext);

  const { activeComp, ticketModal } = useContext(CampusContext);

  const campus = [
    [HoustonWorkingTickets, HoustonCompleteTickets],
    [ArizonaWorkingTickets, ArizonaCompleteTickets],
    [OregonWorkingTickets, OregonCompleteTickets],
    [PepperdineWorkingTickets, PepperdineCompleteTickets],
  ];

  const currentCampus = () => {
    if (currentUni === 1) {
      console.log(user.user_id);
      console.log(campus[1]);
      return campus[0];
    }
    if (currentUni === 2) {
      console.log(user.user_id);
      console.log(campus[2]);
      return campus[1];
    }
    if (currentUni === 3) {
      console.log(user.user_id);
      console.log(campus[3]);
      return campus[2];
    }
    if (currentUni === 4) {
      console.log(user.user_id);
      console.log(campus[4]);
      return campus[3];
    }
  };

  console.log(currentUni);
  let currentUniversity = currentCampus();

  if (activeComp === "myTickets") {
    return (
      <div>
        <div className="myTicketBoardContainer">
          <h1 className="myTicketBoard-header">Ticket Board</h1>
          <div className="myBoardRowPosition">
            <div className="myBoardColumnHeader">
              <h2 className="myBoardColumnH2">Working</h2>
            </div>
            <div className="myBoardColumnHeader">
              <h2 className="myBoardColumnH2">Completed</h2>
            </div>
          </div>
          <div className="myBoardColumnContainer">
            <div className="myBoardColumn">
              {currentUniversity[0]
                .filter((elem) => elem.assigned_tech === user.user_id)
                .map((elem) => {
                  return <Ticket elem={elem} key={elem.assigned_tech} />;
                })}
            </div>
            <div className="myBoardColumn">
              {currentUniversity[1]
                .filter((elem) => elem.assigned_tech === user.user_id)
                .map((elem) => {
                  return <Ticket elem={elem} key={elem.assigned_tech} />;
                })}
            </div>
          </div>
        </div>
        <SingleTicketModal show={ticketModal} />
      </div>
    );
  }
}
