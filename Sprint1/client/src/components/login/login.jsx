import React, { Component } from 'react';
import './login.scss';

class Login extends Component {
	state = {};
	render() {
		return (
			<form className='login'>
				<div className='login__group'>
					<label className='login__label' htmlFor='name'>
						Name
					</label>
					<input className='login__input' type='text' name='name' id='name' />
				</div>
				<div className='login__group'>
					<label className='login__label' htmlFor='password'>
						Type of
					</label>
					<input className='login__input' type='text' name='password' id='password' />
				</div>
				<div className='login__group'>
					<label className='login__label' htmlFor='email'>
						Type of
					</label>
					<input className='login__input' type='email' name='email' id='email' />
				</div>
				<button className='login__group login__btn' type='submit'>
					SUBMIT
				</button>
			</form>
		);
	}
}

export default Login;
