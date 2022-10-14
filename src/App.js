import './index.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircle,faBars} from '@fortawesome/free-solid-svg-icons';
import { FaGithub,FaInstagram,FaTwitter } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import { useState} from "react";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Resume from "./resume";
import Project from "./project";
function App() {
  const[isToggled,setIsToggled]=useState(false);
  return(
      <BrowserRouter>
    <div className='Container'>
      <nav className='navbar'>
        <ul>
        <p></p>
        <li className='icons'>
          <a href='#' className='navlist' id='firstCirc'><FontAwesomeIcon icon={faCircle} /></a>
          <a href='#' className='navlist' id="secondCirc"><FontAwesomeIcon icon={faCircle} /></a>
          <a href='#' className='navlist' id="thirdCirc"><FontAwesomeIcon icon={faCircle} /></a>
        </li>
        <div className='navAll'>
        <a id='bar' onClick={()=>setIsToggled(!isToggled)}><FontAwesomeIcon icon={faBars}/></a>
        <div className={
          isToggled?"navlinks":"notExpand"
          }>
        <ul className='barMenu'>
        <li>
          <Link to="/" className='navlist' id="home">Home</Link>
        </li>
        <li>   
          <Link to="/project" className='navlist'>Project</Link>
        </li>
        <li>
          <Link to="/resume" className='navlist'>Resume</Link>
        </li>
        <li>
          <a href="mailto:nitheshb24@gmail.com" className='navlist'>Contact</a>
        </li>
            </ul></div></div>
        </ul>
        <Routes>
                 <Route exact path='/App' element={< App />}></Route>
                 <Route exact path='/project' element={< Project />}></Route>
                 <Route exact path='/resume' element={< Resume />}></Route>
          </Routes>
      </nav>
      <div className='overall'>
      <div className='word'>
        <h4>Hi there</h4>
          <h1>I'm </h1>
        <p>
          I am a Web Developer
        </p>
        <button><a href="mailto:nitheshb24@gmail.com">Email</a></button>
          <button className='btn'><a href="https://www.linkedin.com/in/nithesh-b-b354841a7/">Linkedin</a></button>
        <TypeAnimation className='anime'  
      sequence={[
        "HTML" , 
        1000,
        "CSS",
        1000,
        'REACT',
        1000,
        'C++',
        1000,
        'PYTHON',1000
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1em' }}
      />
      </div>
      <div className='image'>
      <img src='../imag1.png' ></img>
      </div>
      </div>
      <div className={isToggled?"socialNotExpand":"social"}>
        <a href='https://github.com/Nithesh12' className='appicon'> 
      <FaGithub />
        </a>
        <a href='https://www.instagram.com/n_eethugowda/' className='appicon'>
      <FaInstagram />
        </a>
        <a href='https://twitter.com/NitheshGwda' className='appicon'>
      <FaTwitter />
        </a>
      </div>
    </div>
      </BrowserRouter>
  );
}

export default App;
