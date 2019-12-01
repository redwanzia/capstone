import React, { Component } from 'react'; 
//imrc
import './stories.scss'
import  Kaitlin from '../../asset/kaitlin.jpg'

class Stories extends Component {
  state = {  }
  render() { 
    return (  
      <div className = 'stories'>
      <figure className = 'stories__shape'>
      <img className='stories__img' src={Kaitlin}></img>
      <figcaption lassName='stories__caption' >Henry</figcaption>
      </figure>
        <div className = 'stories__text' >
          <p className='stories__name'>Henry</p>
          <p className='stories__type'>Leukemia</p>
          <p className='stories__story'>Jenna and Brendan Baker were faced with the most difficult challenge of their life when their seemingly healthy two year old son was diagnosed with cancer.  He went to the pediatrician with a fever that was not responding to the normal remedies. A blood test raised the suspicion for cancer and immediately Henry was sent to the Emergency Department at Yale New Haven Children’s Hospital where doctors confirmed his diagnosis.  Acute lymphoblastic leukemia  they were told, which at the time meant nothing more to them than the fact that their son was sick, and they were in for the fight of their lives.</p>
        </div>
      </div>
    );
  }
}
 
export default Stories;