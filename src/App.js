import React, { useState } from "react";
import LogIn from "./login-page/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./login-page/SignUp";
import SignIn from "./login-page/SignIn";
import AdminLandingPage from "./adminLandingPage/adminLandingPage";
import TicketBoard from "./ticketBoard/ticketBoard";
import TicketCreatePage from "./ticketCreatePage/ticketCreate";

function App() {
  const [modalIsOpen, setmodalIsOpen] = useState(true);
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
        <Route exact path='/createticket' element={
        <>
        <TicketCreatePage />
        </>
      }></Route>
    </Routes>
  </Router>   
  );
}

export default App;
