import React, { Component } from 'react';
import './login.scss';

class Login extends Component {
	state = {};
	render() {
		return (
			<div className='login' id='login'>
				<div className='login__content'>
					<h3 className='login__head'>Login....</h3>
					<a href='#navbar' className='login__close'>
						&times;
					</a>
					<form>
						<div className='login__group'>
							<label className='login__label' htmlFor='name'>
								Name
							</label>
							<input className='login__input' type='text' name='name' id='name' />
						</div>
						<div className='login__group'>
							<label className='login__label' htmlFor='password'>
								Password
							</label>
							<input className='login__input' type='password' name='password' id='password' />
						</div>
						<div className='login__group'>
							<label className='login__label' htmlFor='email'>
								Email
							</label>
							<input className='login__input' type='email' name='type' id='typeOf' />
						</div>
						<button className='login__group login__btn' type='submit'>
							SUBMIT
						</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Login;
