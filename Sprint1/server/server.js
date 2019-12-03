const express = require('express');
const app = express();
const cors = require('cors');


//middleware

app.use(cors());
app.use(express.json()); 





const port= process.env.PORT || 8000;
app.listen(port,()=>console.log(`Server ready on port ${port}`)); 






const storiesRoute = require("./route/stories.js");
app.use("/", storiesRoute);


const commentDetailRoute = require("./route/commentDetail.js");
app.use("/commentDetail", commentDetailRoute);


const researchRoute = require("./route/research.js");
app.use("/research", researchRoute);

const typeRoute = require("./route/type.js");
app.use("/type", typeRoute);

const supportRoute = require("./route/support.js");
app.use("/support", supportRoute);






// app.get ('/', (req, res)=>{
//   res.send ('hello there...');
// }) 

// app.get('/api/posts', (req,res)=>{
//   res.send ([1,2,3])
// })

// app.get('/api/posts/:id', (req,res)=>{
//   res.send (req.params.id)
// })