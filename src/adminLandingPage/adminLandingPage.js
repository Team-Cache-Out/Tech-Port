import {useState,useEffect,useContext} from 'react'
import Axiosfetch from '../axiosRequest/axiosfetch'
import "./adminlandingPage.css"
import SignInContext from '../Context/SignInContext'
import { useNavigate } from "react-router-dom";

export default function AdminLandingPage() {
  const navigate = useNavigate()
  const {currentUni, setCurrentUni} = useContext(SignInContext)
  const {user, setUser} = useContext(SignInContext)
  const [houstonTickets , setHoustonTickets] = useState([])
  const [azTickets , setazTickets] = useState([])
  const [osTickets , setosTickets] = useState([])
  const [penTickets , setpenTickets] = useState([])              
  const [loadState , setLoadState] = useState(false)
  const houston = Axiosfetch('https://worldwide-technical-foundation.herokuapp.com/university/1',{ loading: true ,data: null})
  const az = Axiosfetch('https://worldwide-technical-foundation.herokuapp.com/university/2',{ loading: true ,data: null})                                                    
  const os = Axiosfetch('https://worldwide-technical-foundation.herokuapp.com/university/3',{ loading: true ,data: null})
  const pen = Axiosfetch('https://worldwide-technical-foundation.herokuapp.com/university/4',{ loading: true ,data: null})
  const arruni = [houstonTickets,azTickets,osTickets,penTickets]
  

  useEffect(() => {
      setHoustonTickets(houston.data)           
      setazTickets(az.data)
      setosTickets(os.data)
      setpenTickets(pen.data)                      
      setLoadState(true);
    },[houston.data,az.data,os.data,pen.data])
    const nav = (e)=>{
        let id = e.target.id
        setCurrentUni(parseInt(id))
      navigate('/ticketBoard')
    }
    // useEffect(() =>{
    //     setHoustonTickets(houston.data)
    //     setazTickets(az.data)
    //     setosTickets(os.data)
    //     setpenTickets(pen.data)
    // },[houston.data,az.data,os.data,pen.data])
function logout () {
  window.localStorage.clear()
}
  return (
    <div>
    <nav className='adminLPage'>
        <ul>
            <li><p>{user.role}</p></li>
        </ul>
        <h2>WorldWide Technical Foundation</h2>
        <ul>
            <li>
              <p>Welcome, {user.name.split(" ")[0]} <a href="/"> <button className="adminLogout" onClick={logout}>Logout</button>
              </a></p>
            </li>
        </ul>
    </nav>
    {arruni.length > 3 &&                  
    <section className='universities'>
        {arruni.sort((a,b) => {return b.tickets - a.tickets}).map((uni) => { 
      return (
        <div className='uni-card' onClick={nav} id={uni.id}>
            <a href='.' className='name'>{uni.name}</a> 
            <img className='image' src={uni.logo} alt='logo'/>
            <p className='openTickets'>Open Tickets: {uni.tickets} </p>
            <p className='techs'>Techs: {uni.techs}</p>
        </div>)
  })}
    </section>
    
}
    </div>
  )
 }