import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import Nav from './components/navbar/Navbar';

import MainPage from './components/mainpage/mainpage';

import Support from './components/support/support';
import Type from './components/type/type';
import CommentsDetail from './components/commentsDetail/commentsDetails';
import Research from './components/research/research';
import Footer from './components/footer/footer';

import './App.scss';

class App extends React.Component {
	render() {
		return (
			<div className='App'>
				<Nav />
				<BrowserRouter>
					<Switch>
						<Route exact path='/' exact component={MainPage} />
						<Route exact path='/stories/:id' render={(props) => <CommentsDetail {...props} />} />
						<Route path='/research' render={(props) => <Research {...props} />} />
						<Route path='/support' render={(props) => <Support {...props} />} />
						<Route path='/type' render={(props) => <Type {...props} />} />
					</Switch>
				</BrowserRouter>

				<Footer />
			</div>
		);
	}
}

export default App;
