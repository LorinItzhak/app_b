const express= require ('express');
const app = express();
const dotenv= require("dotenv").config();

const port= process.env.port;    

const postRoutes = require("./routes/posts_routes.js");
app.use("/posts", postRoutes);

app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`);
});

