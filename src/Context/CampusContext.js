import { useState, createContext } from "react";

const CampusContext = createContext()

export const CampusProvider = ({children}) => {
    
    // University of Houston
    const [HoustonOpenTickets, setHoustonOpenTickets] = useState(null)
    const [HoustonWorkingTickets, setHoustonWorkingTickets] = useState(null)
    const [HoustonCompleteTickets, setHoustonCompleteTickets] = useState(null)

    // University of Arizona
    const [ArizonaOpenTickets, setArizonaOpenTickets] = useState(null)
    const [ArizonaWorkingTickets, setArizonaWorkingTickets] = useState(null)
    const [ArizonaCompleteTickets, setArizonaCompleteTickets] = useState(null)

    // Oregon State
    const [OregonOpenTickets, setOregonOpentTickets] = useState(null)
    const [OregonWorkingTickets, setOregonWorkingTickets] = useState(null)
    const [OregonCompleteTickets, setOregonCompleteTickets] = useState(null)

    // Pepperdine University
    const [PepperdineOpenTickets, setPepperdineOpenTickets] = useState(null)
    const [PepperdineWorkingTickets, setPepperdineWorkingTickets] = useState(null)
    const [PepperdineCompleteTickets, setPepperCompleteTickets] = useState(null)


    const [ticketModal, setTicketModal] = useState(false)
    const [singleTicket, setSingleTicket] = useState(null)

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
        setSingleTicket
    }}>
        {children}
    </CampusContext.Provider>
}

export default CampusContext