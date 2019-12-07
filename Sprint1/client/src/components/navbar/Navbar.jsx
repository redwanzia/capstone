import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './navbar.scss'
import  Logo from '../../asset/pinkLogo.png'



class Nav extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="nav">
      <a href="http://localhost:3000/"><img className="nav__logo" src={Logo} alt=""></img></a>
      </div>
     );
  }
}
 
export default Nav;