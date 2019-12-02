const express = require('express');
const router = express.Router();
const typeData = require ('../data/type.json');

router.use(express.json())

router.get ('/', (req,res)=>{
  res.send(typeData);
})