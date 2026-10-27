const express=require('express');
const routes = express.Router();

routes.get('/:id',(req,res)=>{
    const id = req.params.id;
    res.send(`Fetching cart for user id ${id}`)
})

routes.post('/:id',(req,res)=>{
    const id = req.params.id;
    res.send(`Adding item for user id ${id}`);
})

module.exports=routes;
