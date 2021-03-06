import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaLinkedinIn,
  FaGithubAlt  
} from 'react-icons/fa';
import { BsMoon } from 'react-icons/bs';
import { IoMdSunny } from 'react-icons/io';

import { 
  leftOnAnimation, 
  leftOffAnimation,
  rightOnAnimation, 
  rightOffAnimation,
} from '../js/AnimationHome';
import { onDarkTheme, offDarkTheme } from '../js/DarkTheme';
import '../css/Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Dark-mode">
          <BsMoon id="Dark-on"className="Dark-mode-icon" onClick={onDarkTheme}/>
          <IoMdSunny id="Dark-off"className="Dark-mode-icon" style={{color: '#EABF57'}} onClick={offDarkTheme}/>
        </div>
        <div className="Flexbox">
          <div id="Left" className="Left Content-container">
            <Link to="/about">
              <div className="Left-animation" 
                onMouseEnter={leftOnAnimation}
                onMouseLeave={leftOffAnimation}
              >
              </div>
            </Link>
            <Link to="/about" className="Mobile-enter"></Link>
            <div id="Text-left" className="Text-container">
              <p>Olá, eu me chamo</p>
              <p>
                <h1>Fabio</h1>
              </p>
              <p>
                <h1>Baldocchi.</h1>
              </p>
            </div>
            <div id="Linkedin" className="Social Linkedin">
              <a href="https://www.linkedin.com/in/fabiobaldocchi/">
                <FaLinkedinIn id="Linkedin-icon" className="Social-icon Linkedin-icon"/>
                <FaLinkedinIn id="Linkedin-icon-dark" className="Social-icon Linkedin-icon-dark"/>
              </a>
            </div>
          </div>
          <div id="Right" className="Right Content-container">
            <Link to="/jobs">
              <div className="Right-animation" 
                onMouseEnter={rightOnAnimation}
                onMouseLeave={rightOffAnimation}
              > 
              </div>
            </Link>
            <Link to="/jobs" className="Mobile-enter"></Link>
            <div id="Text-right" className="Text-container">
              <h1>Portfolio</h1>
              <p>
                <h3>Alguns dos meus</h3>
              </p>
              <p>
                <h3>melhores trabalhos</h3>
              </p>
            </div>
            <div id="Github" className="Social Github">
              <a href="https://github.com/fabiobaldocchi/">
                <FaGithubAlt className="Social-icon Github-icon" id="Github-icon"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
