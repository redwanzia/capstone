const express = require('express');
const router = express.Router();
const commentDetailData = require ('../data/research.json');

router.use(express.json())

router.get ('/', (req,res)=>{
  res.send(commentDetail);
})

module.exports = router;