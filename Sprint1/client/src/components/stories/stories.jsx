import React, { Component } from 'react'; 
//imrc
import './stories.scss'
import  Kaitlin from '../../asset/kaitlin.jpg'

class Stories extends Component {


  render() { 
    return (  
      <div className = 'stories'>
      <figure className = 'stories__shape'>
      <img className='stories__img' src={this.props.img}/>
     
      </figure>
        <div className = 'stories__text' >
          <p className='stories__name'>{this.props.name}</p>
          <p className='stories__type'>{this.props.type}</p>
          <p className='stories__story'>{this.props.story}</p>
        </div>
      </div>
    );
  }
}
 
export default Stories;