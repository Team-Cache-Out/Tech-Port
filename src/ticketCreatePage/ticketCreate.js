import Logo from '../login-page/Logo'
import './ticketCreate.css'
import TicketModal from "./TicketModal"

export default function TicketCreatePage() {
    return (
    <>

        <nav className='adminLPage'>
            <ul>
                <li><a href='/'>admin</a></li>
            </ul>
            <h2>WorldWide Technical Foundation</h2>
            <ul>
                <li><a href='/'>name</a></li>
            </ul>
        </nav>
        <TicketModal />
        
    </>
    )
};