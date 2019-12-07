import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Show from '../../asset/showCase1.jpg';
import './showCase.scss';
import Jesseca from '../../asset/jesseca .jpg';
import Henry from '../../asset/Henry.png';
import main from '../../asset/imgStich-1.jpg';
import Kaitlin from '../../asset/kaitlin .jpg';

class Showcase extends Component {
	state = {};
	render() {
		return (
			<div className='showCase'>
				<figure className='showCase__shape'>
					<img className='showCase__imgShape' src={main} />
					<p className='showCase__imgText'>
						“Cancer is just a <span className='showCase__span'>chapter</span> in our lives and not the{' '}
						<span className='showCase__span'>whole story</span>.”
					</p>
				</figure>

				<div className='showCase__position'>
					<Link to='/research' className='showCase__research'>
						Research
					</Link>
					<Link to='/support' className='showCase__research showCase__med'>
						Treatment Support
					</Link>
					<Link to='/type' className='showCase__research showCase__kind'>
						Information By Type
					</Link>
				</div>

				<img className='showCase__img' src={Show} alt='' />

				<div className='showCase__quote'>
					<div className='showCase__quote__wrap'>
						<p className='showCase__quote__text'>
							“The best thing to do is take one day at a time, be positive, pick your head up when you are
							down and remember what may seem like the most devastating news in your life, can always open
							doors to a whole new world of possibilities.”
						</p>
						<div className='showCase__quote__composition'>
							<img className='showCase__quote__jesseca' src={Jesseca} />
							<img className='showCase__quote__henry' src={Henry} />
							<img className='showCase__quote__kaitlin' src={Kaitlin} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Showcase;
