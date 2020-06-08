import React, { Component } from 'react';
import Lottie from 'react-lottie';
import AboutAnimation from '../animation/mail.json';
import { 
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub 
} from 'react-icons/fa';

import '../css/Contact.css';

import LateralMenu from '../components/LateralMenu';


class Contact extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: AboutAnimation,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    return (
      <div className="Contact">
       <header id="Header-contact">
        <LateralMenu />
       </header>
       <body id="Body-contact">
        <div className="Text-area-contact">
          <div className="Image-contact">
          <Lottie options={defaultOptions}
              height={250}
              width={250}
          />
          </div>
          <div className="Text-contact">
            <p>
            <b><span>s</span>inta-se a vontade</b> para 
            entrar em contato comigo a qualquer 
            hora. Se você tiver perguntas,comentários ou apenas quiser 
            ter um bom papo, terei prazer em responder!
            </p>
            <div style={{marginLeft: '-10px'}}>
              <a href="https://www.facebook.com/fabiobaldocchi">
                <FaFacebookF className="Icon-contact"/>
              </a>
              <a href="https://www.instagram.com/fabiobaldocchi">
                <FaInstagram className="Icon-contact"/>
              </a>
              <a href="https://www.linkedin.com/in/fabiobaldocchi/">
                <FaLinkedinIn className="Icon-contact"/>      
              </a>
              <a href="https://github.com/fabiobaldocchi">
                <FaGithub className="Icon-contact"/>
              </a>
            </div>
          </div>
        </div>
        <div className="Mail-area">
          <p>Se preferir mande um email para <a href="mailto:contato@fabio.com">contato@fabio.com</a></p>
        </div>
       </body>
       <footer id="Footer-contact"> 
         <p>Desenvolvido por Dionei Bianchati - Alguns direitos reservados</p>
       </footer>
      </div>
    );
  }
}

export default Contact;
