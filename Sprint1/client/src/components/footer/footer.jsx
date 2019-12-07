import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Show from '../../asset/showCase1.jpg'
import './footer.scss'
import  Logo from '../../asset/pinkLogo.png'



class Footer extends Component {
  state = {  }
  render() { 
    return ( 
      <footer className='footer'>
        <a href="#"><img className="nav__logo" src={Logo} alt=""></img></a>
        <p className = 'footer__text' >Copyright &copy; Redwan Zia</p>
      </footer>
 
     );
  }
}
 
export default Footer;