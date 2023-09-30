import './App.css';
import Contact from './Components/Contact';
import Home from './Components/Home';
import {BrowserRouter , Route ,Routes}  from "react-router-dom"
import Navbar from './Components/Navbar';






function App() {
 
  return (
    <div  className="App" >
      <BrowserRouter>
      <Navbar/>
      <Routes >
        <Route path='/' element = {<Home/>} activeClass="active"
    to="/"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}/>
      <Route path='/contact' element = {<Contact/>} />
      </Routes>
      
      </BrowserRouter>
      
     
  


     
    </div>
  );
}

export default App;
