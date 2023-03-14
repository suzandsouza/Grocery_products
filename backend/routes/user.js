//routes for user login and signup 
//handled by controllers
const {loginUser, signup}= require('../controllers/userController')
const express=require('express')
const router=express.Router()
router.post('/login',loginUser)
router.post('/signup',signup)
module.exports=router