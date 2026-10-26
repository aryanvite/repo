const express = require('express')
const router = express.Router();
router.get("/",(req,res)=>{
    res.send(`<h1>Orders list</h1>`)
})
router.post("/",(req,res)=>{
    res.send("orders created")
})
module.exports = router;