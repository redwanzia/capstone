import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Show from '../../asset/showCase1.jpg';
import './footer.scss';
import Logo from '../../asset/pinkLogo.png';
import Video1 from '../../asset/Ground-Zero.mp4';

import Video2 from '../../asset/Ground-Zero.webm';

class Footer extends Component {
	state = {};
	render() {
		return (
			<footer className='footer'>
				<a href='#'>
					<img className='nav__logo' src={Logo} alt='' />
				</a>
				<p className='footer__text'>Copyright &copy; Redwan Zia</p>
			</footer>
		);
	}
}

export default Footer;
