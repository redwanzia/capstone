import React, { Component } from 'react';
import './commentsDetails.scss'
import  Kaitlin from '../../asset/kaitlin.jpg'
import  Logo from '../../asset/pinkLogo.png'
class CommentsDetail extends Component {
  state = {  }
  render() { 
    return (

      <div>
          <section className='commentsDetail'>
            <img className='commentsDetail__img' src={Kaitlin}></img>
            <h3 className='commentsDetail__name'>Henry</h3>
            <h4 className='commentsDetail__typeOf'>Leukemia</h4>
            <p className='commentsDetail__story'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quis quisquam esse ex quia illum voluptatibus sunt debitis. Ullam inventore a molestias sunt pariatur, esse saepe maxime minus sapiente id necessitatibus quo obcaecati magnam et suscipit eligendi. Ab ipsam dicta ipsum, vitae dignissimos eveniet quaerat laudantium quis! Odit corporis aliquam voluptas illum iste laborum dolore iure, mollitia ut quas cum sequi accusantium. Fugiat dolore voluptates consectetur alias temporibus odio, quia necessitatibus doloremque, tenetur velit mollitia eum quasi placeat a nihil modi praesentium tempora facere! Officia beatae voluptatibus laborum maxime temporibus et dolor excepturi minus aut nostrum. Nulla nihil architecto tempora voluptate vitae, rem quis praesentium beatae commodi eaque tenetur asperiores ipsum officia ipsam amet cupiditate laboriosam sed sequi distinctio? Aperiam vel molestias voluptatem fuga officia unde est nesciunt laudantium accusantium! Atque sint voluptas nihil dignissimos qui libero inventore reiciendis, aspernatur unde voluptatum obcaecati. Impedit, quibusdam quod? Tenetur reprehenderit ea aut possimus dolores cumque deserunt a cum itaque nesciunt modi animi eligendi ad alias, nostrum corrupti! Est dicta repellendus saepe aliquam, eveniet, officiis soluta vero incidunt libero recusandae voluptatibus! Laboriosam repudiandae, voluptate, adipisci id quisquam architecto rerum magnam voluptatem quas dolores unde possimus, molestiae debitis animi aperiam corrupti explicabo dicta! Magni, perferendis eos! Sequi voluptatum architecto deserunt. Nesciunt voluptate perspiciatis molestiae iure quasi voluptatibus magni alias a quaerat? Rerum cum eveniet laudantium voluptatibus similique aperiam neque eaque possimus vero, nulla inventore dolorem assumenda quo vel repellat, cumque odio sequi expedita. Magni eos consectetur nihil repudiandae tempora nobis ipsam voluptas harum accusantium in quisquam voluptatibus incidunt doloribus saepe consequatur ratione ad, aspernatur placeat eius? Iste vel dolor quidem non quae nulla aut unde assumenda ducimus magni. Labore hic, delectus sit rem deserunt ea accusantium aut, molestias maxime, ratione fugiat quod dolorem necessitatibus facilis. Velit autem ad fugiat odit, dolorem blanditiis ab quis molestiae repellat, voluptates accusantium, possimus non ducimus? Explicabo deserunt unde neque inventore consectetur nobis, eaque expedita dolores exercitationem sit ipsam impedit, veniam tempora laboriosam modi dicta architecto eligendi odit iste earum placeat officiis nostrum culpa? Fugit culpa aperiam ipsa, voluptas minus inventore! Laborum suscipit voluptates quam recusandae provident assumenda cum dignissimos eaque consequuntur consectetur debitis ipsa, ut distinctio natus qui aut? Aliquam velit possimus repellat? Libero corrupti neque iure minima eum magni, non ipsum eveniet, corporis quisquam eaque et repellat nulla dolores excepturi, molestiae perferendis laudantium atque deleniti quod sed ullam sint asperiores vitae! Adipisci consequuntur praesentium ipsa ad, numquam explicabo odit hic maiores sed placeat exercitationem maxime optio itaque corporis cupiditate tempore accusamus consectetur dolores architecto eveniet. Corrupti cum suscipit voluptates laborum eum vero autem, distinctio nobis odio laboriosam consequuntur earum, velit qui dolore facilis voluptate optio, aspernatur rem impedit! Aut similique, blanditiis illum quisquam tempore, eos repudiandae est architecto, veniam sit non asperiores fugiat esse aspernatur assumenda inventore sunt. Reprehenderit ducimus magnam, pariatur provident quos aliquam, possimus dolor veritatis quaerat voluptatum in voluptatem nobis vitae soluta consequatur odit error laboriosam aperiam blanditiis officia aspernatur ea unde iusto dolores. Minus dolore accusamus, exercitationem ea quam eligendi tenetur! Cum, quae</p>     
          </section>
          <section className ='commentsDetail__form' >
          <div className ='commentsDetail__form__container' >
            <h3 className ='commentsDetai__form__head'>Add Comment....</h3>
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

        <div className = 'commentsDetail__comment'>
       
        <figure className = 'commentsDetail__comment__shape'>
        <img className="commentsDetail__comment__logo" src={Logo} alt=""></img>      
        
        </figure>
          <div className = 'commentsDetail__comment__text' >
            <p className='commentsDetail__comment__name'>Henry</p>            
            <p className='commentsDetail__comment__story'>Jenna and Brendan Baker were faced with the most difficult challenge of their life when their seemingly healthy two year old son was diagnosed with cancer.  He went to the pediatrician with a fever that was not responding to the normal remedies. A blood test raised the suspicion for cancer and immediately Henry was sent to the Emergency Department at Yale New Haven Children’s Hospital where doctors confirmed his diagnosis.  Acute lymphoblastic leukemia  they were told, which at the time meant nothing more to them than the fact that their son was sick, and they were in for the fight of their lives.</p>
          </div>
        </div>


      </div>
      

     );
  }
}
 
export default CommentsDetail
;