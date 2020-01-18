import React from 'react';
import './App.css';
import {FaFacebook, FaTwitter, FaDribbble, FaGithub, FaEnvelope, FaRegCopyright} from 'react-icons/fa';

function App() {
  return (
    <div id='wraper'>
      <div id='bg'></div>
      <div id='overlay'></div>
        <div id='main'>
          <header id='header'>
            <h1>Suyono</h1>
            <h3>Front-End . Web Designer</h3>
            <nav>
              <ul>
                <li><a href='#' target='blank' ><FaFacebook/></a></li>
                <li><a href='#'><FaTwitter/></a></li>
                <li><a href='#'><FaDribbble/></a></li>
                <li><a href='#'><FaGithub/></a></li>
                <li><a href='#'><FaEnvelope/></a></li>
              </ul>
            </nav>
          </header>
          <footer id='footer'>
            <p><FaRegCopyright/>LandingPage. Design: Suyono.</p>
          </footer>
        </div>
    </div>
  );
}

export default App;
