import React, { Component } from 'react';
import axios from 'axios';
import './form.scss'




class Form  extends Component {

  render() { 
    return ( 
      <section className ='form' >
        <div className ='form__container' >
          <h3 className ='form__head'>Write Your Story....</h3>
          <form onSubmit={this.props.storyHandler}>
            <div className ='form__group'>
              <label className = 'form__label' htmlFor= 'name'>Name</label>
              <input className='form__input'   type='text' name='name' id = 'name'></input>
            </div>
            <div className ='form__group'>
              <label className = 'form__label' htmlFor= 'typeOf'>Type of</label>
              <input className='form__input' type='text' name='type' id = 'typeOf'></input>
            </div>
            <div className ='form__group'>
              <label className = 'form__label' htmlFor= 'typeOf'>Story</label>
              <textarea className='form__textArea' name='story' id = 'message'></textarea>
            </div>
            <button  className= 'form__group form__btn'  type='submit'>SUBMIT</button>
          </form>
        </div>
        

      </section>
     );
  }
}
 
export default Form ;