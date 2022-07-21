import React, {useState} from "react";
import LogIn from "./login-page/Login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from "./login-page/SignUp";
import Logo from "./login-page/Logo";
import SignIn from "./login-page/SignIn";

function App() {
  const [modalIsOpen, setmodalIsOpen] = useState(true);
  return (
   <Router>
    <Routes>
      <Route exact path='/' element={
        <>
        <Logo></Logo>
        <LogIn></LogIn>
        </>
      }></Route>
      <Route exact path='/signup' element={
        <>
        <Logo></Logo>
        <LogIn></LogIn>
        <SignUp modalIsOpen={modalIsOpen} setmodalIsOpen={setmodalIsOpen}></SignUp>
        </>
       
      }></Route>
      <Route exact path='/signin' element={
        <>
        <Logo></Logo>
        <SignIn modalIsOpen={modalIsOpen} setmodalIsOpen={setmodalIsOpen}></SignIn>
        </>
      }></Route>
    </Routes>
   </Router>
   
  );
}

export default App;
