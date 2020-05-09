import React, { Component } from 'react';
import linkedin from './images/linkedin.svg';
import github from './images/github.svg';
import darkMode from './images/darkMode.svg';
import photo from './images/photo.png';
import moreGray from './images/moreGray.svg';
import moreBlue from './images/moreBlue.svg';
import './App.css';

class App extends Component {

  leftOnAnimation = () => {
    document.getElementById("Photo").style.marginLeft = '15px';
    document.getElementById("Photo").style.transitionDuration = '1s';
    document.getElementById("More-left").style.opacity = '1';
    document.getElementById("More-left").style.marginLeft = '85%';
    document.getElementById("More-left-blue").style.marginLeft = '85%';
    document.getElementById("More-left").style.transitionDuration = '1s';
    document.getElementById("Text-left").style.marginLeft = '280px';
    document.getElementById("Text-left").style.transitionDuration = '1s';
    document.getElementById("Left").style.width = '70%';
    document.getElementById("Left").style.transitionDuration = '1s';
    document.getElementById("Linkedin").style.transitionDuration = '1s';
    document.getElementById("Linkedin").style.width = '58%';
  }
  leftOffAnimation = () => {
    document.getElementById("Photo").style.marginLeft = '-150%';
    document.getElementById("Photo").style.transitionDuration = '1s';
    document.getElementById("More-left").style.opacity = '0';
    document.getElementById("More-left").style.marginLeft = '-40%';
    document.getElementById("More-left-blue").style.marginLeft = '-40%';
    document.getElementById("More-left").style.transitionDuration = '1s';
    document.getElementById("Text-left").style.marginLeft = '60px';
    document.getElementById("Text-left").style.transitionDuration = '1s';
    document.getElementById("Left").style.width = '50%';
    document.getElementById("Left").style.transitionDuration = '1s';
    document.getElementById("Linkedin").style.transitionDuration = '1s';
    document.getElementById("Linkedin").style.width = '50%';
  }

  render() {
    return (
      <div className="Container">
        <div className="Flexbox">
          <div id="Left" className="Left Content-container">
            <div className="Left-animation" 
              onMouseEnter={this.leftOnAnimation}
              onMouseLeave={this.leftOffAnimation}
            >
              <img id="Photo" className="Photo" src={photo} alt="Photo" />
              <img id="More-left" className="More-left" src={moreGray} alt="More"/>
              <img id="More-left-blue" className="Blue" src={moreBlue} alt="More" />
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
              <img className="Social-icon" src={linkedin} alt="linkedin" />
            </div>
          </div>
          <div className="Right Content-container">
            <div className="Dark-mode">
              <img className="Dark-mode-icon" src={darkMode} alt="darkMode" />
            </div>
            <div className="Text-container">
              <h1>Portfolio</h1>
              <p>
                <h3>Alguns dos meus</h3>
              </p>
              <p>
                <h3>melhores trabalhos</h3>
              </p>
            </div>
            <div className="Social Github">
              <img className="Social-icon" src={github} alt="github" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
