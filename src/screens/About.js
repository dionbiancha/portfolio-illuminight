import React, { Component } from 'react';
import { MdViewHeadline } from 'react-icons/md';
import { 
  RiComputerLine,
  RiAndroidLine,
  RiCodeSSlashLine 
} from 'react-icons/ri';

import '../css/About.css';
import photo from '../images/photo.png';

class About extends Component {
  render() {
    return (
      <div className="About">
       <header id="Header">
         <div className="Main-header">
          <MdViewHeadline className="Menu-icon"/>
         </div>
       </header>
       <body id="Body">
         
         <div className="About-body">
          <p> 
            <b><span>P</span>razer em conhece-lo!</b> Sou Dionei Bianchati, tenho 24 anos 
           e vivo atualmente em Missal, uma pequena cidadezinha no interior 
           do Paraná. Estou na area de programação Web e Mobile a cerca 
           de 1 ano, acumulnado experiência em diversas tecnologias 
           entre as quais se destacam <b>React.js</b> e <b>React Native</b>.
          </p>
          <div className="Photo-about">
            <img className="Photo" src={photo}/>
          </div>
         </div>
         <p className="Title-body">Serviços</p>
          <div className="Services">
            <div className="Services-item">
              <div className="Item-flex">
                <RiComputerLine className="Icon-service" style={{color:'#1A73E8'}}/>
                <p>Criação de Sites</p>
              </div>
              <p>Desenvolvedor de Sites, Página de captura, 
                Landing pages, especialista em HTML, 
                CSS e JavaScript.
              </p>
            </div>
            <div className="Services-item">
              <div className="Item-flex">
                <RiAndroidLine className="Icon-service" style={{color:'#EF7B7B'}}/>
                <p>Criação de aplicativos</p>
              </div>
              <p>Desenvolvedor de aplicativos android em seus mais
                diversos segmentos.
              </p>
            </div>
            <div className="Services-item">
              <div className="Item-flex">
                <RiCodeSSlashLine className="Icon-service" style={{color:'#27AE60'}}/>
                <p>Desenvolvedor Frontend</p>
              </div>
              <p>Criação ou transformação de layout/templates em HTML5, 
                CSS3 e JavaScript.
              </p>
            </div>
          </div>    
       </body>
           
       <footer id="Footer"> 
         
       </footer>
      </div>
    );
  }
}

export default About;
