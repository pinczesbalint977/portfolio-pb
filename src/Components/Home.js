import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCodeCompare } from '@fortawesome/free-solid-svg-icons';


const Home = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:balcika44@gmail.com';
  };

  const handlePhoneClick = () => {
    if (window.innerWidth < 600) {
      window.location.href = 'tel:+36307144802';
    } else {

      alert('Telefonszámunk:+36/30/714-48-02');

    }
  };

  const handleGithubClick = () => {
    window.open('https://github.com/dashboard', '_blank');
  };

  return (
    <div id='Homep'>
      <div id="title">
      <p id='name'>PINCZÉS</p>
        <h1 id="nametwo">BÁLINT</h1>
        <p id='work'>Frontend programozó</p>
      </div>
      <div id='contactbtn' className='iconbtn'>
        <button onClick={handlePhoneClick}><FontAwesomeIcon icon={faMobileScreenButton} /></button>
        <button onClick={handleEmailClick}><FontAwesomeIcon icon={faEnvelope} /></button>
        <button onClick={handleGithubClick}><FontAwesomeIcon icon={faCodeCompare} /></button>
      </div>
    </div>
  )
}

export default Home