import { useNavigate, useParams } from 'react-router-dom';
import NavBar from './NavBar'

function LoginPage() {
  const naviaget = useNavigate();
  const backAbout = ()=>{
    naviaget("/about");
  }

  const {fname,lname} = useParams();
  // console.log(fname);

  return (
    <div>
      <NavBar/>
      <h1>Login page</h1>
      <h4 style={{margin: "3rem 5rem"}} onClick={backAbout}>Go  <button>back to About</button></h4>
    <h2>Hello to {fname} and{lname}</h2>
    </div>
  )
}

export default LoginPage
