const express= require ('express');
const app = express();
const dotenv= require("dotenv").config();
const mongoose= require("mongoose");


const initApp=()=> { 
 return new Promise((resolve,reject)=>{
const db= mongoose.connection;
db.on("error", (err)=>{
    console.log(err);
});
db.once("open",()=>{
    console.log("connected to MongoDB");
});
    
mongoose.connect(process.env.DB_CONNECT).then(()=>{
    console.log('initApp finish');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const postRoutes = require("./routes/posts_routes");
app.use("/posts", postRoutes);


app.get("/about", (req,res)=>{
    res.send("About page");
});
resolve(app);

// .error((err)=>{
//     console.error(err);
//     reject(err);
});
});
};
module.exports = initApp;
