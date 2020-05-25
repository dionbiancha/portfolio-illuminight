import React, { Component } from 'react';

import '../css/Contact.css';

import LateralMenu from '../components/LateralMenu';


class Contact extends Component {
  render() {
    return (
      <div className="Contact">
       <header id="Header">
        <LateralMenu />
       </header>
       <body id="Body-contact">

       </body>
       <footer id="Footer"> 
         <p>Desenvolvido por Dionei Bianchati - Alguns direitos reservados</p>
       </footer>
      </div>
    );
  }
}

export default Contact;
