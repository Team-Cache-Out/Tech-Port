import { useState, createContext } from "react";

const CampusContext = createContext()

export const CampusProvider = ({children}) => {
    
    // University of Houston [unversity_id = 1]
    const [HoustonOpenTickets, setHoustonOpenTickets] = useState(null)
    const [HoustonWorkingTickets, setHoustonWorkingTickets] = useState(null)
    const [HoustonCompleteTickets, setHoustonCompleteTickets] = useState(null)

    // University of Arizona [unversity_id = 2]
    const [ArizonaOpenTickets, setArizonaOpenTickets] = useState(null)
    const [ArizonaWorkingTickets, setArizonaWorkingTickets] = useState(null)
    const [ArizonaCompleteTickets, setArizonaCompleteTickets] = useState(null)

    // Oregon State [unversity_id = 3]
    const [OregonOpenTickets, setOregonOpentTickets] = useState(null)
    const [OregonWorkingTickets, setOregonWorkingTickets] = useState(null)
    const [OregonCompleteTickets, setOregonCompleteTickets] = useState(null)

    // Pepperdine University [unversity_id = 4]
    const [PepperdineOpenTickets, setPepperdineOpenTickets] = useState(null)
    const [PepperdineWorkingTickets, setPepperdineWorkingTickets] = useState(null)
    const [PepperdineCompleteTickets, setPepperCompleteTickets] = useState(null)

    // Ticket modal State
    const [ticketModal, setTicketModal] = useState(false)
    const [singleTicket, setSingleTicket] = useState(null)

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
        setActiveComp
    }}>
        {children}
    </CampusContext.Provider>
}

export default CampusContext