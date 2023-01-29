const mongoose = require('mongoose')
const productSchema = mongoose.Schema({
    name:String,
    slug:String,
    category:String,
    image: String,
    price: Number,
    brand:String,
    quantity: Number
})

module.exports = mongoose.model('Products', productSchema)
