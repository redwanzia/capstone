import React from 'react';
import Nav from './components/navbar/Navbar'
import Showcase from './components/showCase/showCase';
import Stories from './components/stories/stories';
import Research from './components/research/research';


import './App.scss';




function App() {
  return (
    <div className="App">
    <Nav/>
   
    <Showcase/>
    <Stories/>

    </div>
  );
}

export default App;
