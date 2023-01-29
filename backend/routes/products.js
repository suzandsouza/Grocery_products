const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.json('Getting all products through a route')
})

module.exports=router