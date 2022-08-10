import React, { useContext } from "react";
import CampusContext from "../Context/CampusContext";
import SignInContext from "../Context/SignInContext";
import "./campusTechs.css"
import Tech from "./tech";

export default function CampusTechs() {

    const { HoustonTechs, ArizonaTechs, OregonTechs, PepperdineTechs } = useContext(CampusContext)

    const { currentUni } = useContext(SignInContext)

    const currentTechs = () => {
        if(currentUni === 1) {
            return HoustonTechs;
        }
        if(currentUni === 2) {
            return ArizonaTechs;
        }
        if(currentUni === 3) {
            return OregonTechs;
        }
        if(currentUni === 4) {
            return PepperdineTechs;
        }
    }

    return (
        <div className="campusTechsContainer">
            <div className="campusTechsHeader">Campus Techs</div>
            <div className="techsContainer">
                {currentTechs().map((elem) => {
                    return (
                        <Tech elem={elem} key={elem.user_id} />
                    )
                })}
            </div>
        </div>
    )
}