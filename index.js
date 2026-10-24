const express = require('express')

const app = express();
let port = 3000;

app.use((req,res,next)=>{
    console.log("Authentication Successful");
    next();
})

app.use("/library-2", (req,res,next)=>{
    console.log("Accessed library 2");
    next();
})

app.use("/library-3", (req,res,next)=>{
    console.log("Accessed library 3 and special access to research paper");
    next();
})

app.get("/library-2",(req,res)=>{
    res.send('<h1>Library 2</h1>')
})

app.get("/library-3",(req,res)=>{
    res.send('<h1>Library 3 research paper </h1>')
})

app.listen(port)