import './App.css';
import { Link, Element, Events, animateScroll as scroll, } from 'react-scroll';
import Home from './Components/Home';
import About from './Components/About'
import Contact from './Components/Contact'
import React, { useEffect, useState } from 'react';
import CardSlider from './Components/CardSliders';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function App() {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);


  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  

  return (
    <div className="App">

        <header className='header'>
        <nav>
          <ul className={click ? 'nav-menu nav-active' : 'nav-menu'}>
            <li className='li'><Link to="Home" smooth={true} duration={500} offset={-40}>Kezdőlap</Link></li>
            <li className='li'><Link to="About" smooth={true} duration={500} offset={-40}>Rólam</Link></li>
            <li className='li'><Link to="CardSlider" smooth={true} duration={500} offset={-40}>Portfólió</Link></li>
            <li className='li'><Link to="Contact" smooth={true} duration={500} offset={-40}>Kapcsolat</Link></li>
          </ul>
        </nav>

        <div className="hamburger" onClick={handleClick}>
        {
        
        click ? (<FontAwesomeIcon icon={faXmark} />)
          : <FontAwesomeIcon icon={faBars} />
      
      }
        </div>
        </header>



        <main>
        <Element name="Home" className="element" id='Home'><Home /></Element>
        <Element name="About" className="element" id='About'><About /></Element>
        <Element name="CardSlider" className="element" id='Profile'><CardSlider /></Element>
        <Element name="Contact" className="element" id='Contact'><Contact /></Element>
        </main>

        <footer>
          <p>Copyright &copy; 2023 Pinczés Bálint</p>
        </footer>
    </div>
  );
}

export default App;
