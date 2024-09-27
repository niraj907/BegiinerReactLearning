import { useNavigate, useParams, useLocation } from 'react-router-dom';
import NavBar from './NavBar'

function LoginPage() {
  const naviagete = useNavigate();
  const backAbout = ()=>{
    naviagete("/about");
  }

const {fname,lname} = useParams();
const location = useLocation();
console.log(location);

const show = () => {
  alert(`Current location: ${location.pathname}`);
};


  return (
    <div>
      <NavBar/>
      <h1>Login page</h1>
      <button onClick={backAbout} style={{ margin: "3rem 5rem" }}>
       Go back to About
      </button>

    <h2>Hello to {fname} and {lname}</h2>
    <h3>Current Location: {location.pathname}</h3>
    <p>
  {location.pathname === "/login/niraj/chaudhary" ? (
    <button onClick={show}>get url</button>
  ) : null}
  </p>
    </div>
 
  )
}

export default LoginPage
