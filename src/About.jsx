import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
function About() {
  const naviaget = useNavigate();
  const goLogin = ()=>{
    naviaget("/login");
  }
  return (
    <div>
        <NavBar/>
     <h4 style={{margin: "3rem 5rem"}} onClick={goLogin}>Click Here <button>Go to Login</button></h4>
    
    </div>
  )
}

export default About
