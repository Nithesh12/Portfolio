import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircle,faBars} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './index.css';

function Project (){
    const[isToggled,setIsToggled]=useState(false);
    return (
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
       
      </nav>

      <div className='newDiv'>
        <button className='new1' ><a href='https://emr-wine.vercel.app/doctorRegistration' >HealthMithra</a></button>
        <p className='smallpara'>
            Electronic Medical Record, safest way to secure and share all the medical records between patients and doctors. Technologies used  : React Firebase
        </p>

        <button className='new1'><a href='https://emr-wine.vercel.app/doctorRegistration' >Egg Counter</a></button>
        <p className='smallpara'>Basic Website involving CRUD opeartions</p>

        <button className='new1'><a href='https://github.com/Nithesh12/jarvis'>Jarvis</a></button>
        <p className='smallpara'>Personal Voice Assitant,assists user to perform daily tasks just by a command. Technologies used : Python</p>
      </div>

      </div>
    )
}
  
export default Project;
