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

    const {name,type,story}= this.state.commentsData;
    return (

      <div>
          <section className='commentsDetail'>
            <img className='commentsDetail__img' src={Kaitlin}></img>
            <h3 className='commentsDetail__name'>{name}</h3>
            <h4 className='commentsDetail__typeOf'>{type}</h4>
            <p className='commentsDetail__story'>{story}</p>     
          </section>
          <div className = 'commentsDetail__comment'>
       
        <figure className = 'commentsDetail__comment__shape'>
        <img className="commentsDetail__comment__logo" src={Logo} alt=""></img>      
        
        </figure>
          <div className = 'commentsDetail__comment__text' >
            <p className='commentsDetail__comment__name'>Henry</p>            
            <p className='commentsDetail__comment__story'>Jenna and Brendan Baker were faced with the most difficult challenge of their life when their seemingly healthy two year old son was diagnosed with cancer.  He went to the pediatrician with a fever that was not responding to the normal remedies. A blood test raised the suspicion for cancer and immediately Henry was sent to the Emergency Department at Yale New Haven Children’s Hospital where doctors confirmed his diagnosis.  Acute lymphoblastic leukemia  they were told, which at the time meant nothing more to them than the fact that their son was sick, and they were in for the fight of their lives.</p>
          </div>
        </div>
          <section className ='commentsDetail__form' >
          <div className ='commentsDetail__form__container' >
            <h3 className ='commentsDetail__form__head'>Add Comment....</h3>
            <form>
              <div className ='commentsDetail__form__group'>
                <label className = 'commentsDetail__form__label' htmlFor= 'name'>Name</label>
                <input className='commentsDetail__form__input'   type='text' name='name' id = 'name'></input>
              </div>

              <div className ='commentsDetail__form__group'>
                <label className = 'commentsDetail__form__label' htmlFor= 'typeOf'>Comment</label>
                <textarea className='commentsDetail__form__textArea' name='message' id = 'message'></textarea>
              </div>
              <button className= 'commentsDetail__form__group'  type='submit'>SUBMIT</button>
            </form>
          </div> 
        </section>

        


      </div>
      

     );
  }
}
 
export default CommentsDetail
;