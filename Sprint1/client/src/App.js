import React from 'react';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';
import axios from 'axios';
import Nav from './components/navbar/Navbar'

import MainPage from './components/mainpage/mainpage';

import Support from './components/support/support';
import Type from './components/type/type';
import CommentsDetail from './components/commentsDetail/commentsDetails';
import Research from './components/research/research'
import './App.scss';




class App extends React.Component {
//searchResearch = (text) =>{axios.get(`http://http://localhost:5000/support?search= ${text}`).then((response)={this.setState({researchData :response.data})  })}}


  
  render() { 
    return ( 
      <div className="App">
      <Nav/>   
        <BrowserRouter>
          <Switch>
            <Route exact path='/' exact component={MainPage}></Route>           
            <Route exact path='/stories/:id' component={CommentsDetail}></Route>           
            <Route path='/research' render={(props) => <Research {...props} searchResearch={this.searchResearch}/>}></Route>      
            <Route path='/support' render={(props) => <Support {...props} searchSupport={this.searchSupport}/>}></Route>     
            <Route path='/type' component={Type}></Route>       
          </Switch> 
        </BrowserRouter>
      </div>
     );
  }
}
 
export default App;
