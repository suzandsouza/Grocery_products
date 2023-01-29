const mongoose = require('mongoose')
const orderSchema = mongoose.Schema({
    price: Number,
    products: Array,
    email: String,
    address: String
})

module.exports = mongoose.model('Orders',orderSchema)