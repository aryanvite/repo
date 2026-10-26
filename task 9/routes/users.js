const express = require('express')
const router = express.Router();


router.get("/",(req,res)=>{
    res.send(`<h1>users list</h1>`)
})
router.post("/",(req,res)=>{
    res.send(`<h1>users created</h1>`)
})



module.exports = router;