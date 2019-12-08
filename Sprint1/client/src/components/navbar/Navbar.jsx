import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';
import Logo from '../../asset/pinkLogo.png';

class Nav extends Component {
	state = {};
	render() {
		return (
			<div className='nav' id='navbar'>
				<input className='nav__checkbox' type='checkbox' id='nav-toggle' />
				<label className='nav__button' htmlFor='nav-toggle'>
					<span className='nav__icon'>&nbsp;</span>
				</label>
				<div className='nav__background'>&nbsp;</div>
				<div className='nav__navigation'>
					<ul className='nav__list'>
						<li className='nav__item'>
							{' '}
							<a href='#login' className='nav__link'>
								{' '}
								Login{' '}
							</a>{' '}
						</li>
						<li className='nav__item'>
							{' '}
							<a href='#' className='nav__link'>
								{' '}
								About{' '}
							</a>{' '}
						</li>
					</ul>
				</div>
				<a href='http://localhost:3000/'>
					<img className='nav__logo' src={Logo} alt='' />
				</a>
			</div>
		);
	}
}

export default Nav;
