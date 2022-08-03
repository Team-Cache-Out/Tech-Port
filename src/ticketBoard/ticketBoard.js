import React from "react";
import "./ticketBoard.css";
import { Route } from "react-router-dom";
import TicketCreatePage from "../ticketCreatePage/ticketCreate";
import Header from "./header";
import Navbar from "./navbar";
import { useContext } from "react";
import CampusContext from "../Context/CampusContext";
import Ticket from "./ticket";
import TicketCreatePage from "../ticketCreatePage/ticketCreate";

export default function TicketBoard() {
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
            <Ticket />
          </div>
        </div>
      </div>
    </div>
  );
}
