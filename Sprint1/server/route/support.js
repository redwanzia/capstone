const express = require('express');
const router = express.Router();
const supportData = require ('../data/support.json');

router.use(express.json())

router.get ('/', (req,res)=>{
  res.send(supportData);
})