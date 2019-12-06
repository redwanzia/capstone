const express = require('express');
const router = express.Router();
const researchData = require ('../data/research.json');

router.use(express.json())

router.get ('/', (req,res)=>{
  return (req.query)
  res.send(researchData);
})

module.exports = router;