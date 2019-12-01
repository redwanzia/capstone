import React, { Component } from 'react';
import  SearchIcon from '../../asset/search-icon.png'
import  CardImg from '../../asset/card-1.jpg'
import './type.scss'

class Type  extends Component {
  state = {  }
  render() { 
    return (
      
      <section className ='type'>
        <h3 className='type__heading'>Search information By type</h3>
        <div className ='type__group'>
          <label className = 'type__label' htmlFor= 'type'>Search</label>
          <img className='type__img' src={SearchIcon}></img>
          <input className='type__input' type='text' name='type' id = 'type'></input>
        </div>  


        <div className='type__cardFlex'>
                <div className ='type__card'> 
                  <p className ='type__cardHead'>Brain Cancer</p>
                  <img className='type__cardImg' src={CardImg}></img>
                  <button className ='type__cardBtn'>Get Info</button>        
                </div>




                <div className ='type__card'> 
                  <p className ='type__cardHead'>Brain Cancer</p>
                  <img className='type__cardImg' src={CardImg}></img>
                  <button className ='type__cardBtn'>Get Info</button>        
                </div>
                <div className ='type__card'> 
                  <p className ='type__cardHead'>Brain Cancer</p>
                  <img className='type__cardImg' src={CardImg}></img>
                  <button className ='type__cardBtn'>Get Info</button>        
                </div>
                <div className ='type__card'> 
                <p className ='type__cardHead'>Brain Cancer</p>
                <img className='type__cardImg' src={CardImg}></img>
                <button className ='type__cardBtn'>Get Info</button>        
              </div>
                

                
                
        </div>
        
      </section>
     );
  }
}
 
export default Type ;