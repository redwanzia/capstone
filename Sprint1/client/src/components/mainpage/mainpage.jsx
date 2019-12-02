import React, { Component } from 'react';
import Showcase from '../showCase/showCase';

import Stories from '../stories/stories';
import Form from '../form/form';

class MainPage  extends Component {
  state = {  }
  render() { 
    return ( 
      <div> 
        <Showcase/>
        <Stories/>
        <Form/>
      </div>
     );
  }
}
 
export default MainPage ;