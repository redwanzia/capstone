import React, { Component } from 'react';
import  SearchIcon from '../../asset/search-icon.png'
import  cardResearch from '../../asset/cardResearch-1.jpg'
import './research.scss'

class Research extends Component {
  state = {  }
  render() { 
    return ( 
      <section className ='research'>
      <h3 className='research__heading'>Search information By type</h3>
      <div className ='research__group'>
        <label className = 'research__label' htmlFor= 'type'>Search</label>
        <img className='research__img' src={SearchIcon}></img>
        <input className='research__input' type='text' value= 'text'  name='type' id = 'type'></input>
      </div>  


      <div className='research__cardFlex'>
              <div className ='research__card'> 
                <p className ='research__cardHead'>Cancer Research</p>
                <img className='research__cardImg' src={cardResearch}></img>
                <button className ='research__cardBtn'>Get Info</button>        
              </div>




              <div className ='research__card'> 
                <p className ='research__cardHead'>Cancer Research</p>
                <img className='research__cardImg' src={cardResearch}></img>
                <button className ='research__cardBtn'>Get Info</button>        
              </div>
              <div className ='research__card'> 
                <p className ='research__cardHead'>Cancer Research</p>
                <img className='research__cardImg' src={cardResearch}></img>
                <button className ='research__cardBtn'>Get Info</button>        
              </div>
              <div className ='research__card'> 
              <p className ='research__cardHead'>Cancer Research</p>
              <img className='research__cardImg' src={cardResearch}></img>
              <button className ='research__cardBtn'>Get Info</button>        
            </div>
              

              
              
      </div>
      
    </section>
     );
  }
}
 
export default Research;