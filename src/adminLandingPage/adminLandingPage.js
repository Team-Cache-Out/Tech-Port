import {useState,useEffect} from 'react'
import Axiosfetch from '../axiosRequest/axiosfetch'
import "./adminlandingPage.css"


export default function AdminLandingPage() {
  const [university, setUniversity] = useState([])
  const [loadState , setLoadState] = useState(false)
  const {data,fetchError,loading} = Axiosfetch('https://enigmatic-shore-87936.herokuapp.com/universities')
  
  useEffect(() => {
      setUniversity(data);
      setLoadState(true);
      console.log(data)
  },[data])


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
    {university.length > 0 &&
    <section className='universities'>
        <div><p>{university[0].name}</p> <img src={university[0].logo_url} alt='logo'/><p>Tickets: 10</p><p>Techs: 4</p></div>
        <div><p>{university[1].name}</p><img src={university[1].logo_url} alt='logo'/><p>Tickets: 20</p><p>Techs: 5</p></div>
        <div><p>{university[2].name}</p><img src={university[2].logo_url} alt='logo'/><p>Tickets: 30</p><p>Techs: 7</p></div>
        <div><p>{university[3].name}</p><img src={university[3].logo_url} alt='logo'/><p>Tickets: 23</p><p>Techs: 4</p></div>
    </section>
    
}
    </>
  )
 }


