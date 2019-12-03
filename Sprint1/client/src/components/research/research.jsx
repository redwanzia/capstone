import React, { Component } from 'react';
import axios from 'axios';
import  SearchIcon from '../../asset/search-icon.png'
import  cardResearch from '../../asset/cardResearch-1.jpg'
import './research.scss'


class Research extends Component {
state = {

   text:''
}

onSubmit=(e)=>{
  e.preventDefault();
  this.props.searchResearch(this.state.text)
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
          <input className = 'research__btn' type= 'submit' value='search' ></input>


        </form>



      </div>  





      <div className='research__cardFlex'>
          <div className ='research__card'> 
            <p className ='research__cardHead'>{this.props.type}</p>
            <img className='research__cardImg' src={this.props.img}></img>
            <button className ='research__cardBtn'> <a className ='research__cardBtn__link'  href={this.props.link}>Get info</a> </button>     
          </div>           
              
      </div>
      
    </section>
     );
  }
}
 
export default Research;