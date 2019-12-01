import React, { Component } from 'react';
import  SearchIcon from '../../asset/search-icon.png'
import  cardSupport from '../../asset/cardSupport-2.jpg'
import './support.scss'

class Support  extends Component {
  state = {  }
  render() { 
    return ( 
      <section className ='support'>
      <h3 className='support__heading'>Search information By type</h3>
      <div className ='support__group'>
        <label className = 'support__label' htmlFor= 'type'>Search</label>
        <img className='support__img' src={SearchIcon}></img>
        <input className='support__input' type='text' name='type' id = 'type'></input>
      </div>  


      <div className='support__cardFlex'>
              <div className ='support__card'> 
                <p className ='support__cardHead'>Toronto</p>
                <img className='support__cardImg' src={cardSupport}></img>
                <button className ='support__cardBtn'>Get Info</button>        
              </div>




              <div className ='support__card'> 
                <p className ='support__cardHead'>Montreal</p>
                <img className='support__cardImg' src={cardSupport}></img>
                <button className ='support__cardBtn'>Get Info</button>        
              </div>
              <div className ='support__card'> 
                <p className ='support__cardHead'>Charlottetown</p>
                <img className='support__cardImg' src={cardSupport}></img>
                <button className ='support__cardBtn'>Get Info</button>        
              </div>
              <div className ='support__card'> 
              <p className ='support__cardHead'>Saint John</p>
              <img className='support__cardImg' src={cardSupport}></img>
              <button className ='support__cardBtn'>Get Info</button>        
            </div>
              

              
              
      </div>
      
    </section>


     );
  }
}
 
export  default Support ;