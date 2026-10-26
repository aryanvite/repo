const express = require('express')

const routes = express.Router();

routes.get('/',(req,res)=>{
    res.send('Here is the list of books!')
})

routes.post('/',(req,res)=>{
    res.send('Book has been added!')
})

module.exports = routes;