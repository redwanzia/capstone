const express = require('express');
const router = express.Router();
const supportData = require ('../data/support.json');

router.use(express.json())

router.get ('/', (req,res)=>{
  let filDta; 
if (req.query.search) {
  filDta = supportData.filter ((support) =>{
    if (support.type.includes(req.query.search)){
      return true
    } else {
        return false;
      }
  });
} else{
  filDta=supportData;

  
}  
  res.send(filDta);
})

module.exports = router;