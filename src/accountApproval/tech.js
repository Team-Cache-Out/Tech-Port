import React, { useContext } from 'react'
import "./AccountApproval.css"
import CampusContext from '../Context/CampusContext';

export default function Tech(props) {    
    const { setActiveComp } = useContext(CampusContext)    
    const handleAdminClick = (e) => {
        let id = parseInt(e.target.id)     
        fetch(`https://worldwide-technical-foundation.herokuapp.com/users/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
            'role': 'admin'            
            }),
            headers: {
            'Content-type' : 'application/json',
            }
        })
        .then((response) => response.json())
        .then((data) => {
            window.alert(data.name + " has been granted the Admin Role"); 
            setActiveComp('campusReport')           
        })
        .catch((error) => {
            console.error('Error:', error);
        });              
    }
    //future functionality: there will be issues if tech has tickets assigned to them and changes campus
    // const handleCampusClick = (e) => {
    //     let newCampus = window.propmpt("Set a new campus for User 1-4")
    //     fetch(`https://worldwide-technical-foundation.herokuapp.com/users/${e.target.id}`, {
    //         method: 'PATCH',
    //         body: JSON.stringify({
    //         'university_id': `${newCampus}`            
    //         }),
    //         headers: {
    //         'Content-type' : 'application/json'
    //         }
    //     })        
    // } 
    
    return (
        <div id={props.elem.user_id}>
            <div className="TechContainer">
                <div className="TechName TechContainerInnerLeft">Technician Name: {props.elem.name}</div>                                
                <div className="TechCampus TechContainerInnerCenter" id={props.elem.user_id} /*onClick={handleCampusClick}*/>Current Campus: {props.campus}</div>
                <div className="TechContainerInnerRight"><button className="GrantAdmin" id={props.elem.user_id} onClick={handleAdminClick}>Grant Admin</button></div>
            </div>
        </div>
    )
}