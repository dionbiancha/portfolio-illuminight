import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';

import { 
  RiComputerLine,
  RiAndroidLine,
  RiCodeSSlashLine 
} from 'react-icons/ri';

import '../css/About.css';

import LateralMenu from '../components/LateralMenu';

import fabio from '../images/fabio.png';
import miguel from '../images/miguel.png';
import carlos from '../images/carlos.png';

class About extends Component {
  render() {
    const settings =  {
      arrows: false,
      arrowsBlock: false,
      autoplay: true,
      autoplaySpeed: 10000,
      dots: true
    };
    return (
      <div className="About">
       <header id="Header">
        <LateralMenu />
       </header>
       <body id="Body">
         <div className="About-body">
          <p> 
            <b><span>P</span>razer em conhece-lo!</b> Sou Fabio Baldocchi, tenho 28 anos 
           e vivo atualmente em Florianópolis, uma cidade situada no litoral de
           Santa Catarina. Estou na area de programação Web e Mobile a cerca 
           de 5 anos, acumulando experiência em diversas tecnologias 
           entre as quais se destacam <b>React.js</b> e <b>React Native</b>.
          </p>
          <div className="Photo-about">
            <img className="Photo" src={fabio}/>
          </div>
         </div>
          <div className="Services">
            <div className="Services-item">
              <div className="Item-flex">
                <RiComputerLine className="Icon-service" style={{color:'#1A73E8'}}/>
                <h3>Criação de Sites</h3>
              </div>
              <p>Desenvolvedor de Sites, Página de captura, 
                Landing pages, especialista em HTML, 
                CSS e JavaScript.
              </p>
            </div>
            <div className="Services-item">
              <div className="Item-flex">
                <RiAndroidLine className="Icon-service" style={{color:'#EF7B7B'}}/>
                <h3>Criação de aplicativos</h3>
              </div>
              <p>Desenvolvedor de aplicativos android em seus mais
                diversos segmentos.
              </p>
            </div>
            <div className="Services-item">
              <div className="Item-flex">
                <RiCodeSSlashLine className="Icon-service" style={{color:'#27AE60'}}/>
                <h3>Desenvolvedor Frontend</h3>
              </div>
              <p>Criação ou transformação de layout/templates em HTML5, 
                CSS3 e JavaScript.
              </p>
            </div>
          </div>
          <div id="Divisor"></div>
          <div className="Area-title">
            <h2 className="Title-body">Depoimentos</h2>
          </div>
         <div className="Area-depoi">
          <Slider { ...settings }>
            <div className="Depoi-item">
              <img src={miguel} />
              <h3>Carlos de Lima</h3>
              <p>"Participamos de alguns projetos em hackatons, e pode 
                perceber-se como evolui rápido para aprender uma  nova tecnologia, 
                além de trabalhar muito bem em equipe auxiliando colegas 
                iniciantes ou que não entendem muito bem de tal tecnologia. 
                Me ajudou muito para entender todos conceitos e evoluir 
                para tornar-se um desenvolvedor FullStack, nunca me deixou 
                na mão, impossivel falar algo ruim de um pessoa que consegue 
                ser profissional, interpessoal e empático!"</p>
            </div>
            <div className="Depoi-item">
              <img src={carlos} />
              <h3>Miguel Ramos</h3>
              <p>"Baseado na experiencia que tivemos em projetos, Fabio é 
                uma pessoa que trabalha muito bem em equipe, está sempre 
                disposto a aprender e debater ideias, se dedica 100% aos 
                projetos e sempre prezando pela qualidade das entregas."</p>
            </div>
          </Slider>
        </div>
       </body>
       <footer id="Footer"> 
         <p>Desenvolvido por Dionei Bianchati - Alguns direitos reservados</p>
       </footer>
      </div>
    );
  }
}

export default About;
