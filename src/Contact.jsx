import {NavLink,Outlet} from 'react-router-dom'
// in the nested component will have to use the outllet component to show 
import NavBar from './NavBar'
function Contact() {
  return (
    <div>
        <NavBar/>
      <h1>contact page</h1>
      <div className="nested">
     
      <NavLink  style={{marginRight: "2rem", textDecoration: "none"}} to="youtube">Youtube</NavLink>
     
      <NavLink  style={{marginRight: "2rem", textDecoration: "none"}} to="instragram">Instragram</NavLink>
     
      </div>
      <Outlet/> 
    </div>
  )
}

export default Contact
