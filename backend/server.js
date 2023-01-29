const express = require('express')
const mongoose = require('mongoose')
const products = require('./routes/products')
const cors = require('cors')
require('dotenv').config()
const bcrypt = require('bcrypt')
const Products = require('./Products');
const Orders = require('./Orders');
const Users_event = require('./Users');
 
const app = express()
app.use(express.json())
//express.json is used to parse the incoming requests with JSON payloads and is based upon the bodyparser
//used for parsing the JSON header
app.use(cors());
//cors=>cross-origin resource access

//connect
mongoose.connect(process.env.MONGO_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
});

//api
app.get("/api",(req,res)=>res.status(200).send("Home page"))

//add event
app.post("/api/products/add",(req,res)=>{
    const eventDetail = req.body;
    //console.log("Product details are--> ",eventDetail)
    Products.create(eventDetail, (err,data)=>{
      if(err){
        res.status(500).send(err.message);
      }
      else{
        res.status(200).send(data)
      }
    })
  })
  
  app.get("/api/products/get",(req,res)=>{
    Products.find((err,data)=>{
      if(err){
        res.status(500).send(err);
      }
      else{
        res.status(200).send(data);
      }
    })
  })

  //getting all the users
  app.get("/api/users/get",(req,res)=>{
    Users_event.find((err,data)=>{
      if(err){
        res.status(500).send(err)
      }
      else{
        res.send(200).send(data)
      }
    })
  })

  //one particular product
  app.get("/api/products/${id}",(req,res)=>{
    const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such product'})
  }

  const product = Products.findById(id)

  if (!product) {
    return res.status(404).json({error: 'No such product'})
  }

  res.status(200).json(product)
  })
  //api for ordering i.e buying/booking
  app.post("/api/orders/add",(req,res)=>{
    const products = req.body.basket;
    const price = req.body.price;
    const email= req.body.email;
    const address = req.body.address;
    const orderDetails={
      products: products,
      price: price,
      email: email,
      address: address
    }
  
    Orders.create(orderDetails,(err,result)=>{
      if(err){
        console.log(err)
      }
      else{
        console.log('order added to the database', result);
      }
    })
  })
  
  app.post("/api/orders/get",(req,res)=>{
    const email = req.body.email;
    Orders.find((err,result)=>{
      if(err){
        console.log(err);
      }
      else{
        const userOrders = result.filter((order)=>order.email==email);
        res.send(userOrders);
      }
    })
  })
  
  //api for login and signup
  app.post("/api/auth/signup",async(req,res)=>{
    const {email, password, fullName} = req.body;
    const encrypt_password = await bcrypt.hash(password,10);
    const userDetail={
      email:email,
      password: encrypt_password,
      fullName: fullName
    }
    const user_exist = await Users_event.findOne({email:email});
    if(user_exist){
      res.send({mssg:'Email already in use!'})
  
    }
    else{
      Users_event.create(userDetail, (err,result)=>{
        if(err){
          res.status(500).send({mssg: err.message})
        }
        else{
          res.send({mssg:'User created sucessfully'})
        }
      })
    }
  })
  
  app.post("/api/auth/login",async(req,res)=>{
    const { email, password }=req.body
    const userDetail = await Users_event.findOne({email: email});
    if(userDetail){
      //we compare the password and the user entered one
      if(await bcrypt.compare(password, userDetail.password)){
        res.send(userDetail);
      }
      else{
        res.send({error: "Incorrect password"})
      }
    }
    else{
      res.send({error:"User does not exist"}) //i.e the user has not signed up only
    }
  })

  // for paymrnt
  app.post("/api/payment/create", async(req,res)=>{
    const total=req.body.amount;
    console.log("Payment request received for this rupees", total);
    // const payment = await stripe.paymentIntents.create({
    //   amount: total*100,
    //   currency: "inr",
    // })
  
    
    // console.log(payment)
    res.status(201).send({
      'mssg':'Successful'
    
    }
      );
   
  });
  
  app.listen(process.env.PORT,()=>
  console.log('Clearly listening on port',process.env.PORT))
