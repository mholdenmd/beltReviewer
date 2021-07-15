const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title  to be filled out!"],
        minLength: [2, "Title must be at least 2 characters"]
    },
    price: {
        type: String,
        required: [true, "Price to be filled out!"],
        minLength: [2, "Price must be at least 2 characters"]
    },
    description: {
        type: String,
        required: [true, "Description to be filled out!"],
        minLength: [10, "Description must be at least 10 characters"]
    },
    
    


})

const Product = mongoose.model("product", productSchema)

module.exports = Product;

