import React, { Component } from 'react';
import { 
  FaLinkedinIn,
  FaGithubAlt  
} from 'react-icons/fa';
import { MdMore } from 'react-icons/md';
import { BsMoon } from 'react-icons/bs';

import photo from './images/photo.png';
import { 
  leftOnAnimation, 
  leftOffAnimation,
  rightOnAnimation, 
  rightOffAnimation,
} from './js/AnimationHome';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Container">
        <div className="Flexbox">
          <div id="Left" className="Left Content-container">
            <div className="Left-animation" 
              onMouseEnter={leftOnAnimation}
              onMouseLeave={leftOffAnimation}
            >
              <img id="Photo" className="Photo" src={photo} alt="Photo" />
              <MdMore id="More-left" className="More-left"alt="More" />
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
              <FaLinkedinIn className="Social-icon Linkedin-icon" alt="Linkedin"/>
            </div>
          </div>
          <div id="Right" className="Right Content-container">
            <div className="Dark-mode">
              <BsMoon className="Dark-mode-icon" alt="darkMode"/>
            </div>
            <div className="Right-animation" 
              onMouseEnter={rightOnAnimation}
              onMouseLeave={rightOffAnimation}
            >
              <MdMore id="More-right" className="More-right"alt="More" />
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
              <FaGithubAlt className="Social-icon" alt="Github"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
