const express = require('express');
const router = express.Router();
const researchData = require ('../data/research.json');

router.use(express.json())

router.get ('/', (req,res)=>{
  let filDta; 
if (req.query.search) {
  filDta = researchData.filter ((research) =>{
    if (research.type.includes(req.query.search)){
      return true
    } else {
        return false;
      }
  });
} else{
  filDta=researchData;

  
}




  console.log(filDta);
  res.send(filDta);
})

module.exports = router;