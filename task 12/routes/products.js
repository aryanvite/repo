const express = require('express');
const routes = express.Router();

routes.get('/',(req,res)=>{
    res.send('Fetch all products');
})

routes.post('/',(req,res)=>{
    res.send('Add a new product')
})

routes.get('/:id',(req,res)=>{
    id=req.params.id;
    res.send(`Product id = ${id}`)
})

module.exports=routes;