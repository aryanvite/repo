const express = require('express')

const app = express();
let port = 3000;



app.get("/about",(req,res)=>{
    res.send('<h1>About section he</h1>')
})

app.get("/welcome/:id",(req,res)=>{
    const id1 = req.params.id;
    const age = req.query.age;
    const name = req.query.name;
    res.send(`Hello ${name}, your age is ${age} and user id is ${id1}`)
})

app.listen(port)
