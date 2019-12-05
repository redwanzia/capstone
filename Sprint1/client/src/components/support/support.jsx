import React, { Component } from 'react';
import axios from 'axios';
import  SearchIcon from '../../asset/search-icon.png'
import  cardSupport from '../../asset/cardSupport-2.jpg'
import './support.scss'



function  SupportCard(props) {
  const {type,img,link} = props 
  return(
    <div className ='support__card'> 
      <p className ='support__cardHead'>{type}</p>
      <img className='support__cardImg' src={img}></img>
      <button className ='support__cardBtn'> <a className ='support__cardBtn__link'  href={link}>Get info</a> </button>     
    </div> 
    
  ) 
}

class Support  extends Component {
  state = { 
      supportData : [],
      text : ''   
   }


   componentDidMount() {
    axios.get('http://localhost:5000/support').then((response) => {
      // console.log(response);
      this.setState({ supportData: response.data });
    });
  }
  onSubmit=(e)=>{
    e.preventDefault();
    this.props.searchSupport(this.state.text)
    this.setState({text: ''})
    // console.log(this.state.text);
  }
  
  onChange = (e)=>{
    this.setState({text: e.target.value})
  }



  render() { 
    return ( 
      <section className ='support'>
      <h3 className='support__heading'>Search Treatment Support in Your City </h3>
      <div className ='support__group'>
        <label className = 'support__label' htmlFor= 'type'>Search</label>
        <img className='support__img' src={SearchIcon}></img>
        <input className='support__input' 
          type='text' 
          value= {this.state.text}  
          onChange= {this.onChange}  
          name='type' 
          id = 'type'></input>
          <input className = 'research__btn' type= 'submit' value='search' ></input>  
      </div>  

      <div className='support__cardFlex'>
      {this.state.supportData.map((data)=>{
        return <SupportCard type={data.type} img={data.img} link = {data.link}/>
      })}     
              
      </div>
      
    </section>


     );
  }
}
 
export  default Support ;


