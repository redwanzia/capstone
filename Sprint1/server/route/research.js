const express = require('express');
const router = express.Router();
const researchData = require ('../data/research.json');

router.use(express.json())

router.get ('/', (req,res)=>{
  res.send(researchData);
})