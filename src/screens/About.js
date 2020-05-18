import React, { Component } from 'react';

import '../css/About.css';
import photo from '../images/photo.png';

class About extends Component {
  render() {
    return (
      <div className="Container">
       <header className="Header">
         <div className="Main-header">
           <img className="Photo" src={photo}/>
           <div className="Text-header">
            <p>Olá, eu me chamo</p>
            <p>
              <h1>Dionei</h1>
            </p>
            <p>
              <h1>Bianchati.</h1>
            </p>
           </div>
         </div>
         <div className="Social-header">
          <div className="Title-area">
            <div className="Line-area">
              <div className="Line-text">
                <p>Social</p>
              </div>
            </div>
          </div>
          <div className="Icons-area">

          </div>
         </div> 
       </header>
      </div>
    );
  }
}

export default About;
