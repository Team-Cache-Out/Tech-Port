import React from "react";
import { useState, useEffect, useContext } from 'react';
import "./AccountApproval.css"
import SignInContext from "../Context/SignInContext";
import Tech from "./tech"

export default function TechAccounts() {
    const { currentUni } = useContext(SignInContext);
    const [techAccounts, setTechAccounts] = useState(null)
    let campus = ""
    if (currentUni === 1){
        campus = "University of Houston"    
    }else if (currentUni === 2){
        campus = "University of Arizona"    
    }else if (currentUni === 3){
        campus = "Oregon University"    
    }else if (currentUni === 4){
        campus = "Pepperdine University"    
    }
    useEffect(() => {        
        fetch(`http://localhost:4000/techs/${currentUni}`, {
            method: 'GET',
            headers: {
                'Content-type' : 'application/json'
            }
        })   
        .then (res => res.json())
        .then (data => {
            if(data.length !== 0) {
                setTechAccounts(data)        
            } else {
                //handle errors here
                console.log("error pulling techs data.length equals 0")
            }
        });
    }, [])
    return(          
        <div className="TechAccounts">
            {techAccounts ? techAccounts.map((elem) => {
                return (
                    <Tech elem={elem} key={elem.user_id} campus={campus}/>
                ) 
            }) : null}
        </div>
    )
}