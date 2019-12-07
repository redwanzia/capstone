const express = require('express');
const router = express.Router();
const typeData = require ('../data/type.json');

router.use(express.json())

router.get ('/', (req,res)=>{
  let filDta; 
if (req.query.search) {
  filDta = typeData.filter ((type) =>{
    if (type.type.includes(req.query.search)){
      return true
    } else {
        return false;
      }
  });
} else{
  filDta=typeData;

  
}  
  res.send(filDta);
})

module.exports = router;