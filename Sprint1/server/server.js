const express = require('express');
const app = express();
const cors = require('cors');


//middleware

app.use(cors());
app.use(express.json()); 





const port= process.env.PORT || 8000;
app.listen(port,()=>console.log(`Server ready on port ${port}`)); 



const commentRoute = require("./Routes/commentDetail.js");
app.use("/type", commentRoute);


const commentDetailRoute = require("./Routes/commentDetail.js");
app.use("/type", commentDetailRoute);


const researchRoute = require("./Routes/research.js");
app.use("/research", researchRoute);

const typeRoute = require("./Routes/type.js");
app.use("/type", researchRoute);

const supportRoute = require("./Routes/support.js");
app.use("/type", supportRoute);


commentDetail



// app.get ('/', (req, res)=>{
//   res.send ('hello there...');
// }) 

// app.get('/api/posts', (req,res)=>{
//   res.send ([1,2,3])
// })

// app.get('/api/posts/:id', (req,res)=>{
//   res.send (req.params.id)
// })