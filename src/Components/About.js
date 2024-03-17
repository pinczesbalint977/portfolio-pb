import React from 'react'
import Pb from '../Pic/pb1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGit } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faSass } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <div id='aboutcontent'>
    <div id='abouttext'>
      <div id="text">
        <h2>Rólam</h2>
        <p>Frontend fejlesztőként szakosodva a JavaScript nyelv és különböző keretrendszerek segítségével szenvedélyesen alkotok és fejlesztek modern webalkalmazásokat. Az informatikai világ változásai és kihívásai mindig is inspiráltak a folyamatosan fejlődésre hogy mindig lépést tartsak az új technológiákkal.Folyamatos tanulási vágyamból adódóan képzésekkel, iskolákkal rendszeresen bővítem a tudástáram. </p>
        <h3>Skills</h3>
        <div className="icon-group">
    <FontAwesomeIcon className='icon' icon={faReact} />
    <FontAwesomeIcon className='icon' icon={faAngular} />
    <FontAwesomeIcon className='icon' icon={faJs} />
    <FontAwesomeIcon className='icon' icon={faNodeJs} />
    <FontAwesomeIcon className='icon' icon={faHtml5} />
  </div>
  <div className="icon-group">
    <FontAwesomeIcon className='icon' icon={faGithub} />
    <FontAwesomeIcon className='icon' icon={faGit} />
    <FontAwesomeIcon className='icon' icon={faCss3Alt} />
    <FontAwesomeIcon className='icon' icon={faSass} />
    <FontAwesomeIcon className='icon' icon={faBootstrap} />
  </div>
      </div>
      <img src={Pb} alt="about"  id='aboutimg'/>
    </div>
    </div>
  )
}

export default About