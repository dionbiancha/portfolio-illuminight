import React, { Component } from 'react';
import Lottie from 'react-lottie';

import Constructor from '../animation/constructor.json';
import '../css/Portfolio.css';

import LateralMenu from '../components/LateralMenu';


class Portfolio extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: Constructor,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    return (
      <div className="Portfolio">
       <header id="Header-portfolio">
        <LateralMenu />
       </header>
       <body id="Body-portfolio">
         <div style={{marginTop: '80px'}}>
         <Lottie options={defaultOptions}
              height={350}
              width={500}
          />
         </div>
       </body>
       <footer id="Footer-portfolio"> 
         <p>Desenvolvido por Dionei Bianchati</p>
       </footer>
      </div>
    );
  }
}

export default Portfolio;
