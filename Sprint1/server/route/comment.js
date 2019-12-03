const express = require('express');
const router = express.Router();
const commentData = require ('../data/stories.json');

router.use(express.json())

router.get ('/', (req,res)=>{
  res.send(commentData);
})

router.get('/stories/:id', (req, res) => {
  const findID = commentsData.find(IDData => {
      return req.params.id === IDData.id
  })
      if(findID) {
          return (response.send(findID)); 
      } else { 
          return response.status(404).send('ID Not Found');
      }
});


router.post('/'. (req, res)=>{
  const newId = commentData.length;

  const newComments ={
    "id" : `Z${newId}`,
    "name" : req.body.name,
    "type" : req.body.type,
    // "img" : req.body.img,
    "story" : req.body.story
  }

  if (
    req.body.name &&
    req.body.type &&
    // req.body.img &&
    req.body.story
  ){

    commentData.push(newComments);
    res.send(commentData)

  }else{
    return response.status(400).send('Cannot Process Order With Empty Fields');
  }





})

module.exports = router;