import React, { Component } from 'react';
import './navbar.scss'
import  Logo from '../../asset/pinkLogo.png'


class Nav extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="nav">
      <img className="nav__logo" src={Logo} alt=""></img>
      </div>
     );
  }
}
 
export default Nav;