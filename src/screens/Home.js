import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaLinkedinIn,
  FaGithubAlt  
} from 'react-icons/fa';
import { MdMore } from 'react-icons/md';
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
            <div className="Left-animation" 
              onMouseEnter={leftOnAnimation}
              onMouseLeave={leftOffAnimation}
            >
              <Link to="/about">
                <MdMore id="More-left" className="More-left"/>
                <MdMore id="More-left-dark" className="More-left-dark"/>
                </Link>
            </div>
            <div id="Text-left" className="Text-container">
              <p>Olá, eu me chamo</p>
              <p>
                <h1>Dionei</h1>
              </p>
              <p>
                <h1>Bianchati.</h1>
              </p>
            </div>
            <div id="Linkedin" className="Social Linkedin">
              <a href="https://www.linkedin.com/in/dionbiancha/">
                <FaLinkedinIn id="Linkedin-icon" className="Social-icon Linkedin-icon"/>
                <FaLinkedinIn id="Linkedin-icon-dark" className="Social-icon Linkedin-icon-dark"/>
              </a>
            </div>
          </div>
          <div id="Right" className="Right Content-container">
            <div className="Right-animation" 
              onMouseEnter={rightOnAnimation}
              onMouseLeave={rightOffAnimation}
            >
              <MdMore id="More-right" className="More-right" />
              <div id="Suport-right"className="Suport-right" onMouseEnter={rightOnAnimation}></div>
            </div>
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
              <a href="https://github.com/dionbiancha/">
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
