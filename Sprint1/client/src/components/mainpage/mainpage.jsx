import React, { Component } from 'react';
import axios from 'axios';
import Showcase from '../showCase/showCase';

import Stories from '../stories/stories';
import Form from '../form/form';

class MainPage  extends Component {
  state = { 
    storiesData : [],
   }
   componentDidMount() {
		axios.get('http://localhost:5000/stories').then((response) => {
			console.log(response);
			this.setState({ storiesData: response.data });
		});
  }
  

   storyHandler = (e) =>{
    e.preventDefault();

    const newStory = {
      name: e.target.name.value, 
      type: e.target.type.value, 
      story: e.target.story.value}

    axios.post(`http://localhost:5000/stories/Z2`,newStory).then(response=>{

    this.setState({storiesData: response.data})

    })
  }


  render() { 
    const storiesData =this.state.storiesData.map((data)=>{
      return <Stories key={data.id} id={data.id} name={data.name} type={data.type} img={data.img} story={data.story}/>
    }).reverse()   
    return ( 
      <div> 
        <Showcase/>
        {storiesData}        
        <Form storyHandler={this.storyHandler}/>
      </div>
     );
  }
}
 
export default MainPage ;