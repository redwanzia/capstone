import React, { Component } from 'react';
import axios from 'axios';
import Showcase from '../showCase/showCase';

import Stories from '../stories/stories';
import Form from '../form/form';

class MainPage  extends Component {
  state = { 

    storiesData : []
   }
   componentDidMount() {
		axios.get('http://localhost:5000/').then((response) => {
			console.log(response);
			this.setState({ storiesData: response.data });
		});
	}


  render() { 
    const storiesData =this.state.storiesData.map((data)=>{
      return <Stories key={data.id} name={data.name} type={data.type} img={data.img} story={data.story}/>
    })   
    return ( 
      <div> 
        <Showcase/>
        {storiesData}        
        <Form/>
      </div>
     );
  }
}
 
export default MainPage ;