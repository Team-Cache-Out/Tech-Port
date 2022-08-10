import { useState, createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const CampusContext = createContext()

export const CampusProvider = ({children}) => {
    
    // University of Houston [unversity_id = 1]
    const [HoustonOpenTickets, setHoustonOpenTickets] = useLocalStorage("HoustonOpenTickets", null)
    const [HoustonWorkingTickets, setHoustonWorkingTickets] = useLocalStorage("HoustonWorkingTickets", null)
    const [HoustonCompleteTickets, setHoustonCompleteTickets] = useLocalStorage("HoustonCompleteTickets", null)

    // University of Arizona [unversity_id = 2]
    const [ArizonaOpenTickets, setArizonaOpenTickets] = useLocalStorage("ArizonaOpenTickets", null)
    const [ArizonaWorkingTickets, setArizonaWorkingTickets] = useLocalStorage("ArizonaWorkingTickets", null)
    const [ArizonaCompleteTickets, setArizonaCompleteTickets] = useLocalStorage("ArizonaCompleteTickets", null)

    // Oregon State [unversity_id = 3]
    const [OregonOpenTickets, setOregonOpentTickets] = useLocalStorage("OregonOpenTickets", null)
    const [OregonWorkingTickets, setOregonWorkingTickets] = useLocalStorage("OregonWorkingTickets", null)
    const [OregonCompleteTickets, setOregonCompleteTickets] = useLocalStorage("OregonCompleteTickets", null)

    // Pepperdine University [unversity_id = 4]
    const [PepperdineOpenTickets, setPepperdineOpenTickets] = useLocalStorage("PepperdineOpenTickets", null)
    const [PepperdineWorkingTickets, setPepperdineWorkingTickets] = useLocalStorage("PepperdineWorkingTickets", null)
    const [PepperdineCompleteTickets, setPepperCompleteTickets] = useLocalStorage("PepperdineCompleteTickets", null)

    // Campus Techs
    const [HoustonTechs, setHoustonTechs] = useLocalStorage("HoustonTechs", null)
    const [ArizonaTechs, setArizonaTechs] = useLocalStorage("ArizonaTechs", null)
    const [OregonTechs, setOregonTechs] = useLocalStorage("OregonTechs", null)
    const [PepperdineTechs, setPepperdineTechs] = useLocalStorage("PepperdineTechs", null)

    // Ticket modal State
    const [ticketModal, setTicketModal] = useState(false)
    const [singleTicket, setSingleTicket] = useState({
        "ticket_id": 1,
        "open_date": "",
        "close_date": null,
        "problem": "",
        "description": "",
        "note": "",
        "point_of_contact": "",
        "location": "",
        "priority": "",
        "status": "",
        "university_id": 0,
        "assigned_tech": 0
    })

    // Current Navbar Component State
    const [activeComp, setActiveComp] = useState('ticketBoard')


    // functions

    return <CampusContext.Provider value={{
        HoustonOpenTickets,
        setHoustonOpenTickets,
        HoustonWorkingTickets,
        setHoustonWorkingTickets,
        HoustonCompleteTickets,
        setHoustonCompleteTickets,
        ArizonaOpenTickets,
        setArizonaOpenTickets,
        ArizonaWorkingTickets,
        setArizonaWorkingTickets,
        ArizonaCompleteTickets,
        setArizonaCompleteTickets,
        OregonOpenTickets,
        setOregonOpentTickets,
        OregonWorkingTickets,
        setOregonWorkingTickets,
        OregonCompleteTickets,
        setOregonCompleteTickets,
        PepperdineOpenTickets, 
        setPepperdineOpenTickets,
        PepperdineWorkingTickets, 
        setPepperdineWorkingTickets,
        PepperdineCompleteTickets, 
        setPepperCompleteTickets,
        ticketModal,
        setTicketModal,
        singleTicket,
        setSingleTicket,
        activeComp,
        setActiveComp,
        HoustonTechs,
        setHoustonTechs,
        ArizonaTechs,
        setArizonaTechs,
        OregonTechs,
        setOregonTechs,
        PepperdineTechs,
        setPepperdineTechs
    }}>
        {children}
    </CampusContext.Provider>
}

export default CampusContext