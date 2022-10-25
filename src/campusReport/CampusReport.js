import { useContext, useEffect, useState } from "react";
import "./CampusReport.css"
import SignInContext from "../Context/SignInContext";
import Axiosfetch from "../axiosRequest/axiosfetch";

export default function CampusReport() {
    const { currentUni, setCurrentUni } = useContext(SignInContext)
    const [camp, setCamp] = useState([])
    const campus = Axiosfetch(`https://techport-m8h0.onrender.com/campus/tickets/${currentUni}`, { loading: true, data: null })

    useEffect(() => {
        setCamp(campus.data)
    }, [campus.data])
    return (
        <div className="campusReportContainer">
            <div className="campusReportHeader">Campus Report</div>
            <ul>
                <li>Techs: {camp.techs}</li>
                <li>Open Tickets: {camp.open}</li>
                <li>Working Tickets: {camp.working}</li>
            </ul>
            <img src={camp.logo} alt='logo' />
        </div>
    )
}