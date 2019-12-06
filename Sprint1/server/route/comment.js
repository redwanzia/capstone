const express = require('express');
const router = express.Router();
const commentData = require ('../data/stories.json');

router.use(express.json())

router.get ('/', (req,res)=>{
  res.send(commentData);
})

// TODO: be moved to stories









})

module.exports = router;