import React,{ Component } from 'react';
import { MdViewHeadline } from 'react-icons/md';
import { Link } from 'react-router-dom';

import './LateralMenu.css';

export default class LateralMenu extends Component {

  ActiveMenu() {
    document.getElementById("Main-header-click").style.left = '0px';   
    document.getElementById("Main-header-click").style.transitionDuration = '1s';
     
  }
  InactiveMenu() {
    document.getElementById("Main-header-click").style.left = '-25%';   
    document.getElementById("Main-header-click").style.transitionDuration = '1s';
     
  }

  render() {
    return(
      <div>
        <div className="Main-header">
          <MdViewHeadline className="Menu-icon" onClick={this.ActiveMenu}/>
        </div>
        <div id="Main-header-click">
          <MdViewHeadline className="Menu-icon-click" onClick={this.InactiveMenu}/>
          <div className="Menu">
            <ul>
              <li><Link to="/" className="Link">Home</Link></li>
              <li><Link to="/about" className="Link">Sobre</Link></li>
              <li><Link to="/jobs" className="Link">Portfolio</Link></li>
              <li><Link to="/contact" className="Link">Contato</Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
