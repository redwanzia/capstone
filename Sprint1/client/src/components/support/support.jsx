import React, { Component } from 'react';
import axios from 'axios';
import SearchIcon from '../../asset/search-icon.png';
import cardSupport from '../../asset/cardSupport-2.jpg';
import './support.scss';

function SupportCard(props) {
	const { type, img, link } = props;
	return (
		<div className='support__card'>
			<p className='support__cardHead'>{type}</p>
			<img className='support__cardImg' src={img} />
			<button className='support__cardBtn'>
				{' '}
				<a className='support__cardBtn__link' href={link}>
					Get info
				</a>{' '}
			</button>
		</div>
	);
}

class Support extends Component {
	state = {
		supportData: [],

		text: ''
	};

	componentDidMount() {
		axios.get('http://localhost:5000/support').then((response) => {
			// console.log(response);
			this.setState({ supportData: response.data });
		});
	}

	searchSupport = (text) => {
		axios.get(`http://localhost:5000/support?search=${text}`).then((response) => {
			this.setState({ supportData: response.data });
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.searchSupport(this.state.text);
		this.setState({ text: '' });
		// console.log(this.state.text);
	};

	onChange = (e) => {
		this.setState({ text: e.target.value });
	};

	render() {
		return (
			<section className='support'>
				<h3 className='support__heading'>Search facilities By city</h3>
				<div className='support__group'>
					<form onSubmit={this.onSubmit} className='support__form'>
						<label className='support__label' htmlFor='type'>
							Search
						</label>
						<img className='support__img' src={SearchIcon} />
						<input
							className='support__input'
							type='text'
							value={this.state.text}
							onChange={this.onChange}
							name='text'
							id='type'
						/>
						<input className='support__btn' type='submit' value='search' onSubmit={this.onSubmit} />
					</form>
				</div>
				<div className='support__cardFlex'>
					{this.state.supportData.map((data) => {
						return <SupportCard type={data.type} img={data.img} link={data.link} />;
					})}
				</div>
			</section>
		);
	}
}

export default Support;
