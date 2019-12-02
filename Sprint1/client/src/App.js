import React from 'react';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';
import Nav from './components/navbar/Navbar'

import MainPage from './components/mainpage/mainpage';
import Research from './components/research/research';
import Support from './components/support/support';
import Type from './components/type/type';



import './App.scss';






function App() {
  return (
    <div className="App">
    <Nav/>   
      <BrowserRouter>
        <Switch>
          <Route path='/' component={MainPage}></Route>           
          <Route path='/research' component={Research}></Route>      
          <Route path='/support' component={Support}></Route>      
          <Route path='/type' component={Type}></Route>       
        </Switch> 
      </BrowserRouter>
    <Research/>
    

    </div>
  );
}

export default App;
