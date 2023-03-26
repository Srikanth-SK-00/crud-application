const express = require("express");

const app =express();

const mongoose =require("mongoose");


app.use(express.json());
const infoRouter = require("./router");
app.use("/",infoRouter);


app.listen(5000,() => {
    console.log("start");
}) 
mongoose.set('strictQuery',true);

mongoose.connect("mongodb://localhost/tutorial",(err)=>
{
    if(!err)
    {
        console.log("server run");
    }
})
  
     