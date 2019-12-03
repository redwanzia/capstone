import React, { Component } from 'react';
import axios from 'axios';
import Research from './research';



class ResearchMount  extends Component {
  state = { 
    researchData : []

   }

   componentDidMount() {
		axios.get('http://localhost:5000/research').then((response) => {
			// console.log(response);
			this.setState({ researchData: response.data });
		});
	}
  render() { 
    const researchData =this.state.researchData.map((data)=>{
      return <Research key={data.id} type={data.type} img={data.img} link={data.link}/>
    })
    return ( 
      <div>
      {researchData}
      </div>
          
      
     );
  }
}
 
export default ResearchMount ;

 
