import React from "react";
import "./AccountApproval.css"
import TechAccounts from './techAccounts'

export default function AccountApproval() {
    return (
        <>
        <div className="AccountApprovalContainer"> 
            <div className="AccountApprovalHeader">Account Approval</div>                
                <TechAccounts/> 
        </div>

        </>
    )
}