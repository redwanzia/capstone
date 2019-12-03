import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Show from '../../asset/showCase1.jpg'
import './showCase.scss'
import Jesseca from '../../asset/jesseca .jpg'
import Henry from '../../asset/Henry.png'
import Kaitlin from '../../asset/kaitlin .jpg'




class Showcase extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="showCase">
 
        <div className="showCase__position">
          <Link to='/research' className="showCase__research">Research</Link>
          <Link to='/support' className="showCase__research showCase__med">Treatment Support</Link>
          <Link to='/type' className="showCase__research showCase__kind">Information By Type</Link>          
        </div> 

        <img className="showCase__img" src={Show} alt=""></img>  

        <div className="showCase__composition" >
          <img className="showCase__jesseca" src={Jesseca}></img>          
          <img className="showCase__kaitlin" src={Kaitlin} ></img>
          <img className="showCase__henry" src={Henry} ></img>
      </div> 
        

      </div>
     );
  }
}
 
export default Showcase;