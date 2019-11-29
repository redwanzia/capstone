const express = require('express');
const app = express();
const cors = require('cors');


//middleware

app.use(cors());
app.use(express.json()); 

app.get ('/', (req, res)=>{
  res.send ('hello there...');
}) 

app.get('/api/posts', (req,res)=>{
  res.send ([1,2,3])
})

app.get('/api/posts/:id', (req,res)=>{
  res.send (req.params.id)
})



const port= process.env.PORT || 8000;
app.listen(port,()=>console.log(`Server ready on port ${port}`)); 