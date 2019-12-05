import React, { Component } from 'react'; 
import {Link} from 'react-router-dom';
//imrc
import './stories.scss'
import  Kaitlin from '../../asset/kaitlin.jpg'

class Stories extends Component {

  state = {
    "name" : "",
    "type of" :"",
    "story" : ""
  }




  render() { 
    return (  
      <div className= 'background'>
      <Link to={`/stories/${this.props.id}`} className = 'stories'>
      <figure className = 'stories__shape'>
      <img className='stories__img' src={this.props.img}/>
    
      </figure>
        <div className = 'stories__text' >
          <p className='stories__name'>{this.props.name}</p>
          <p className='stories__type'>{this.props.type}</p>
          <p className='stories__story'>{this.props.story}</p>
        </div>
      </Link>
      </div>
    );
  }
}
 
export default Stories;