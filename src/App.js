import React, { useState, useEffect, useContext } from "react";
import LogIn from "./login-page/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./login-page/SignUp";
import SignIn from "./login-page/SignIn";
import AdminLandingPage from "./adminLandingPage/adminLandingPage";
import TicketBoard from "./ticketBoard/ticketBoard";
import CampusContext from './Context/CampusContext'

function App() {
  const [modalIsOpen, setmodalIsOpen] = useState(true);

  const { setHoustonOpenTickets, setHoustonWorkingTickets, setHoustonCompleteTickets } = useContext(CampusContext)
  const { setArizonaOpenTickets, setArizonaWorkingTickets, setArizonaCompleteTickets } = useContext(CampusContext)
  const { setOregonOpentTickets, setOregonWorkingTickets, setOregonCompleteTickets } = useContext(CampusContext)
  const { setPepperdineOpenTickets, setPepperdineWorkingTickets, setPepperCompleteTickets } = useContext(CampusContext)

  // University of Houston Tickets
  useEffect(() => {
    fetch(`https://worldwide-technical-foundation.herokuapp.com/campusTickets/1/open`)
    .then(response => response.json())
    .then(data => setHoustonOpenTickets(data))

    fetch(`https://worldwide-technical-foundation.herokuapp.com/campusTickets/1/working`)
    .then(response => response.json())
    .then(data => setHoustonWorkingTickets(data))

    fetch(`https://worldwide-technical-foundation.herokuapp.com/campusLog/1`)
    .then(response => response.json())
    .then(data => setHoustonCompleteTickets(data))
  }, [setHoustonOpenTickets, setHoustonWorkingTickets, setHoustonCompleteTickets])

  // University of Arizona Tickets
  useEffect(() => {
    fetch(`https://worldwide-technical-foundation.herokuapp.com/campusTickets/2/open`)
    .then(response => response.json())
    .then(data => setArizonaOpenTickets(data))

    fetch(`https://worldwide-technical-foundation.herokuapp.com/campusTickets/2/working`)
    .then(response => response.json())
    .then(data => setArizonaWorkingTickets(data))

    fetch(`https://worldwide-technical-foundation.herokuapp.com/campusLog/2`)
    .then(response => response.json())
    .then(data => setArizonaCompleteTickets(data))
  }, [setArizonaOpenTickets, setArizonaWorkingTickets, setArizonaCompleteTickets])


  // University of Oregon Tickets
  useEffect(() => {
    fetch(`https://worldwide-technical-foundation.herokuapp.com/campusTickets/3/open`)
    .then(response => response.json())
    .then(data => setOregonOpentTickets(data))

    fetch(`https://worldwide-technical-foundation.herokuapp.com/campusTickets/3/working`)
    .then(response => response.json())
    .then(data => setOregonWorkingTickets(data))

    fetch(`https://worldwide-technical-foundation.herokuapp.com/campusLog/3`)
    .then(response => response.json())
    .then(data => setOregonCompleteTickets(data))
  }, [setOregonOpentTickets, setOregonWorkingTickets, setOregonCompleteTickets])

  // Pepperdine University Tickets
  useEffect(() => {
    fetch(`https://worldwide-technical-foundation.herokuapp.com/campusTickets/4/open`)
    .then(response => response.json())
    .then(data => setPepperdineOpenTickets(data))

    fetch(`https://worldwide-technical-foundation.herokuapp.com/campusTickets/4/working`)
    .then(response => response.json())
    .then(data => setPepperdineWorkingTickets(data))

    fetch(`https://worldwide-technical-foundation.herokuapp.com/campusLog/4`)
    .then(response => response.json())
    .then(data => setPepperCompleteTickets(data))
  }, [setPepperdineOpenTickets, setPepperdineWorkingTickets, setPepperCompleteTickets])

  return (
  <Router>
    <Routes>
      <Route exact path='/' element={
        <>
        <LogIn></LogIn>
        </>
      }></Route>
      <Route exact path='/signup' element={
        <>
        <LogIn></LogIn>
        <SignUp modalIsOpen={modalIsOpen} setmodalIsOpen={setmodalIsOpen}></SignUp>
        </>
      }></Route>
      <Route exact path='/signin' element={
        <>
        <SignIn modalIsOpen={modalIsOpen} setmodalIsOpen={setmodalIsOpen}></SignIn>
        </>
      }></Route>
      <Route exact path='/admin' element={
        <AdminLandingPage />
      }></Route>
      <Route exact path='/ticketBoard' element={
        <>
        <TicketBoard />
        </>
      }></Route>
    </Routes>
  </Router>   
  );
}

export default App;
