import React from 'react';
import './Lp.css';
import {FaFacebook, FaTwitter, FaInstagram, FaGithub, FaEnvelope, FaRegCopyright} from 'react-icons/fa';

function Lp() {
  return (
      <div id='main'>
          <div className='bg'></div>
          <header id='header'>
            <h1>Suyono</h1>
            <h3>Front-End . Web Designer</h3>
            <nav>
              <ul>
                <li><a href='https://www.facebook.com/synwebdev' target='blank'><FaFacebook/></a></li>
                <li><a href='https://twitter.com/Syn_WebDev' target='blank'><FaTwitter/></a></li>
                <li><a href='https://www.instagram.com/syn_web_dev' target='blank'><FaInstagram/></a></li>
                <li><a href='https://github.com/Suyono-Sutiman' target='blank'><FaGithub/></a></li>
                <li><a href='mailto:yonoraphael@gmail.com?subject=Please type your name&body=I am interested in your work.'><FaEnvelope/></a></li>
              </ul>
            </nav>
          </header>
          <footer id='footer'>
            <p><FaRegCopyright/>LandingPage. Design: Suyono.</p>
          </footer>
        </div>
  );
}

export default Lp;