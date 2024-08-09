const express=require("express");

const app=express();

app.get("/",(req,res)=>{
    res.send("hi from node rest API")
})

app.listen(4000,()=>{
    console.log("Listing at 4000");
})