import React from "react";
import "./AccountApproval.css"
import Header from '../ticketBoard/header'
import Navbar from '../ticketBoard/navbar'
import TechAccounts from './techAccounts'

export default function AccountApproval() {
    return (
        <div>        
            <Header />
            <Navbar />            
            <TechAccounts/>
        </div>
        
    )
}