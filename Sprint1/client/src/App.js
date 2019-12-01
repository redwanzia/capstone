import React from 'react';
import Nav from './components/navbar/Navbar'
import Showcase from './components/showCase/showCase';
import Stories from './components/stories/stories';
import Form from './components/form/form';


import './App.scss';




function App() {
  return (
    <div className="App">
    <Nav/>   
    <Showcase/>
    <Stories/>
    <Form/>

    </div>
  );
}

export default App;
