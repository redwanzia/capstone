import React, { Component } from 'react';
import axios from 'axios';
import  SearchIcon from '../../asset/search-icon.png'
import  cardResearch from '../../asset/cardResearch-1.jpg'
import './research.scss'

function ResearchCard(props) {
  const {type,img,link} = props
  return(
    <div className ='research__card'> 
    <p className ='research__cardHead'>{type}</p>
    <img className='research__cardImg' src ={img}></img>
    <button className ='research__cardBtn'> <a className ='research__cardBtn__link'  href={link}>Get info</a> </button>     
  </div>  
  );
}

class Research extends Component {
state = {

  researchData : [],

   text:''
}

componentDidMount() {
  axios.get('http://localhost:5000/research').then((response) => {
    // console.log(response);
    this.setState({ researchData: response.data });
  });
}

searchResearch = (text) => {
  axios.get(`http://localhost:5000/research?search=${text}` ).then((response) => {
    this.setState({ researchData: response.data });
  });
}

onSubmit=(e)=>{
  e.preventDefault();
  this.searchResearch(this.state.text)
  this.setState({text: ''})
  // console.log(this.state.text);
}

onChange = (e)=>{
  this.setState({text: e.target.value})
}

  render() { 
  
    return ( 
      
      <section className ='research'>      
      <h3 className='research__heading'>Search information By type</h3>
      <div className ='research__group'>


        <form onSubmit={this.onSubmit} className= 'research__form'>
          <label className = 'research__label' htmlFor= 'type'>Search</label>
          <img className='research__img' src={SearchIcon}></img>
          <input className='research__input' 
          type='text' 
          value= {this.state.text}  
          onChange= {this.onChange}
          name='text' 
          id = 'type'></input>
          <input className = 'research__btn btn btn-success btn-lg'   
          type= 'submit' 
          value='search'
          onSubmit={this.onSubmit} >
          </input>
        </form>


      </div>  
      <div className='research__cardFlex'>
        {this.state.researchData.map((data)=>{
          return <ResearchCard type={data.type} img ={data.img} link = {data.link}/>
        })}
      </div>
      
    </section>
     );
  }
}
 
export default Research;