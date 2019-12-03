import React from 'react';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';
import Nav from './components/navbar/Navbar'

import MainPage from './components/mainpage/mainpage';

import Support from './components/support/support';
import Type from './components/type/type';
import CommentsDetail from './components/commentsDetail/commentsDetails';
import Research from './components/research/research'
import './App.scss';
import ResearchMount from './components/research/researchMount';

class App extends React.Component {
  
  render() { 
    return ( 
      <div className="App">
      <Nav/>   
        <BrowserRouter>
          <Switch>
            <Route exact path='/' exact component={MainPage}></Route>           
            <Route exact path='/stories/:id' component={CommentsDetail}></Route>           
            <Route path='/research' component={ResearchMount}></Route>      
            <Route path='/support' component={Support}></Route>      
            <Route path='/type' component={Type}></Route>       
          </Switch> 
        </BrowserRouter>
      </div>
     );
  }
}
 
export default App;
