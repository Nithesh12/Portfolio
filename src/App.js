import './index.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircle,faBars} from '@fortawesome/free-solid-svg-icons'
import { FaGithub,FaInstagram,FaTwitter } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import { useState} from "react";
function App() {
  const[isToggled,setIsToggled]=useState(false);
  return(
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
          <a href='#' className='navlist' id="home">Home</a>
        </li>
        <li>   
          <a href='#' className='navlist'>Project</a>
        </li>
        <li>
          <a href='#' className='navlist'>Resume</a>
        </li>
        <li>
          <a href='#' className='navlist'>Contact</a>
        </li>
            </ul></div></div>
        </ul>
      </nav>
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
      <img src='../cartoon3-removebg-preview.png' ></img>
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
  );
}

export default App;
