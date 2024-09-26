import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import LoginPage from './LoginPage'
import Error from './Error'
import Instragram from './Instragram'
import Youtube from './Youtube'
function WebPage() {
  return (
    <>
    <BrowserRouter>
    <Routes>

        <Route path='/' element= {<Home/>}/>
        <Route path='/about' element= {<About/>}/>
        <Route path='/contact/' element= {<Contact/>}> 
        <Route path='youtube' element= {<Youtube/>}/>
        <Route path='instragram' element= {<Instragram/>}/>
        </Route> 
    
        <Route path='/login' element= {<LoginPage/>}/>
        <Route path='/login/:fname/:lname' element= {<LoginPage/>}/>
        <Route path='*' element={<Error/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default WebPage
