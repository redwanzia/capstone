import React, { Component } from 'react';

import Show from '../../asset/showCase1.jpg'
import './showCase.scss'
import Jesseca from '../../asset/jesseca .jpg'
import Henry from '../../asset/Henry.jpg'
import Kaitlin from '../../asset/kaitlin .jpg'




class Showcase extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="showCase">
 
        <div className="showCase__position">
          <a href="#" className="showCase__research">Research</a>
          <a href="#" className="showCase__research showCase__med">Research</a>
          <a href="#" className="showCase__research showCase__kind">Research</a>          
        </div> 

        <img className="showCase__img" src={Show} alt=""></img>  

        <div className="showCase__composition" >
          <img className="showCase__jesseca" src={Jesseca}></img>
          <img className="showCase__henry" src={Henry} ></img>
          <img className="showCase__kaitlin" src={Kaitlin} ></img>
      </div> 
        

      </div>
     );
  }
}
 
export default Showcase;