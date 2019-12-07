import React, { Component } from 'react';
import axios from 'axios';
import './commentsDetails.scss'
import  Kaitlin from '../../asset/kaitlin.jpg'
import  Logo from '../../asset/pinkLogo.png'
class CommentsDetail extends Component {
  state = { 
    commentsData:[]
   }
   componentDidMount(){
    if (this.props.match !== undefined) {   
    axios.get(`http://localhost:5000/stories/${this.props.match.params.id}`)
    .then(response=>{
      this.setState({commentsData:response.data})
    }).catch(error=>console.log('ID not found',error))
    }
  }

  render() { 
    
    const {name,type,story,img}= this.state.commentsData;
    return (

      <div>
          <section className='commentsDetail'>
            <img className='commentsDetail__img' src={img}></img>
            <h3 className='commentsDetail__name'>{name}</h3>
            <h4 className='commentsDetail__typeOf'>{type}</h4>
            <p className='commentsDetail__story'>{story}</p>     
          </section>
      </div>
      

     );
  }
}
 
export default CommentsDetail
;