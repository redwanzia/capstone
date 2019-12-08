import React, { Component } from 'react';
import axios from 'axios';
import SearchIcon from '../../asset/search-icon.png';
import CardImg from '../../asset/card-1.jpg';
import './type.scss';

function TypeCard(props) {
	const { type, img, link } = props;
	return (
		<div className='type__card'>
			<p className='type__cardHead'>{type}</p>
			<img className='type__cardImg' src={img} />
			<button className='type__cardBtn'>
				{' '}
				<a className='type__cardBtn__link' href={link}>
					Get info
				</a>{' '}
			</button>
		</div>
	);
}

class Type extends Component {
	state = {
		typeData: [],

		text: ''
	};

	componentDidMount() {
		axios.get('http://localhost:5000/type').then((response) => {
			// console.log(response);
			this.setState({ typeData: response.data });
		});
	}

	searchType = (text) => {
		axios.get(`http://localhost:5000/type?search=${text}`).then((response) => {
			this.setState({ typeData: response.data });
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.searchType(this.state.text);
		this.setState({ text: '' });
		// console.log(this.state.text);
	};

	onChange = (e) => {
		this.setState({ text: e.target.value });
	};

	render() {
		return (
			<section className='type'>
				<h3 className='type__heading'>Search information By type</h3>
				<div className='type__group'>
					<form onSubmit={this.onSubmit} className='type__form'>
						<label className='type__label' htmlFor='type'>
							Search
						</label>
						<img className='type__img' src={SearchIcon} />
						<input
							className='type__input'
							type='text'
							value={this.state.text}
							onChange={this.onChange}
							name='text'
							id='type'
						/>
						<input className='type__btn' type='submit' value='search' onSubmit={this.onSubmit} />
					</form>
				</div>
				<div className='type__cardFlex'>
					{this.state.typeData.map((data) => {
						return <TypeCard type={data.type} img={data.img} link={data.link} />;
					})}
				</div>
			</section>
		);
	}
}

export default Type;
