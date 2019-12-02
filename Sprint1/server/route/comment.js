const express = require('express');
const router = express.Router();
const commentData = require ('../data/research.json');

router.use(express.json())

router.get ('/', (req,res)=>{
  res.send(commentData);
})

module.exports = router;