//schema for user + function for login and signup
const mongoose = require('mongoose')
const bcrypt=require('bcrypt')
const validator=require('validator')

const UserSchema = mongoose.Schema({
    fullName:String,
    email: String,
    password: String
})
UserSchema.statics.signup = async function(email,password,fullName){
      // validation
  if (!email || !password || !fullName) {
    throw Error('All fields must be filled')
  }
  if (!validator.isEmail(email)) {
    throw Error('Email not valid')
  }
  const user_exist = await this.findOne({email:email});
    if(user_exist){
      res.send({mssg:'Email already in use!'})
  
    }
    else{
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)
      
        const user = await this.create({ email, password: hash, fullName })
      
        return user
    }
}

UserSchema.statics.login = async function(email, password) {

    if (!email || !password) {
      throw Error('All fields must be filled')
    }
  
    const user = await this.findOne({ email })
    if (!user) {
      throw Error('Incorrect email')
    }
  
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
      throw Error('Incorrect password')
    }
  
    return user
  }
module.exports = mongoose.model('users_product',UserSchema)