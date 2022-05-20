const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required!"],
        minlength: [3, "Content must be at least 5 characters!"],
    },
    price: {
        type: Number,
        required: [true, "Price is required!"],
        min: [0, "Price cannot be less than 0."]
    },
    description: {
        type: String
    }
},{timestamps: true})



const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;