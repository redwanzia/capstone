import React, { Component } from 'react';
import axios from 'axios';
import  SearchIcon from '../../asset/search-icon.png'
import  CardImg from '../../asset/card-1.jpg'
import './type.scss'


function  TypeCard(props) {
  const {type,img,link} = props 
  return(

    <div className ='type__card'> 
    <p className ='type__cardHead'>{type}</p>
    <img className='type__cardImg' src={img}></img>
    <button className ='support__cardBtn'> <a className= 'support__cardBtn__link' href={link}>Get Info</a> </button>       
  </div> 
    
  ) 
}

class Type  extends Component {
  state = {  
    typeData:[]
  }


  componentDidMount() {
    axios.get('http://localhost:5000/type').then((response) => {
      // console.log(response);
      this.setState({ typeData: response.data });
    });
  }





  render() { 
    return (
      
      <section className ='type'>
        <h3 className='type__heading'>Search information By type</h3>
        <div className ='type__group'>
          <label className = 'type__label' htmlFor= 'type'>Search</label>
          <img className='type__img' src={SearchIcon}></img>
          <input className='type__input' type='text' value= 'search' name='type' id = 'type'></input>
        </div>  


        <div className='type__cardFlex'>
        {this.state.typeData.map((data)=>{
          return <TypeCard type={data.type} img={data.img} link = {data.link}/>
        })}               
                
        </div>

      </section>
     );
  }
}
 
export default Type ;