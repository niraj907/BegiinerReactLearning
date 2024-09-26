import {NavLink} from 'react-router-dom'


function NavBar() {
  return (
    <>
          <nav style={{textAlign: "center"}}>
        <ul>
            <li>
                <NavLink  style={{marginRight: "2rem", textDecoration: "none"}} to="/">Home</NavLink>
                <NavLink  style={{marginRight: "2rem" , textDecoration: "none"}} to="/about">About</NavLink>
                <NavLink   style={{marginRight: "2rem", textDecoration: "none"}} to="/contact">Contact</NavLink>
                <NavLink  style={{marginRight: "2rem" , textDecoration: "none"}} to="/login/Fname/Lname">Login</NavLink>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default NavBar
