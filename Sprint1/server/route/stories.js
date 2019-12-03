const express = require('express');
const router = express.Router();
const storiesData = require ('../data/stories.json');

router.use(express.json())

router.get ('/', (req,res)=>{
  res.send(storiesData);
})

module.exports = router;