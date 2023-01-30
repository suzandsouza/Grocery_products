//this will be required for authorization
const express = require('express')
const router = express.Router()
const requireAuth = require('../middleware/requireAuth')
const Products = require('../Products')

router.use(requireAuth)
router.get('/',(req,res)=>{
    // res.json('Getting all products through a route')
    const user_id = req.user._id
    const products = Products.find({user_id}).sort({createdAt: -1})

    res.status(200).json(products)
})

module.exports=router