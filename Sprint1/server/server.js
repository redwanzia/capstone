const express = require('express');
const app = express();
const cors = require('cors');



//middleware

app.use(cors());
app.use(express.json()); 





// const port= process.env.PORT || 8000;
app.listen(5000,()=>console.log(`Server ready on port 5000`)); 






const storiesRoute = require("./route/stories.js");
// TODO: /stories
app.use("/stories", storiesRoute);


const commentDetailRoute = require("./route/commentDetail.js");
app.use("/commentDetail", commentDetailRoute);


const researchRoute = require("./route/research.js");
app.use("/research", researchRoute);

const typeRoute = require("./route/type.js");
app.use("/type", typeRoute);

const supportRoute = require("./route/support.js");
app.use("/support", supportRoute);

// const formRoute = require("./route/form.js");
// app.use("/support", formRoute);






// app.get ('/', (req, res)=>{
//   res.send ('hello there...');
// }) 

// app.get('/api/posts', (req,res)=>{
//   res.send ([1,2,3])
// })

// app.get('/api/posts/:id', (req,res)=>{
//   res.send (req.params.id)
// })