const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, "Content is required!"],
        minlength: [5, "Content must be at least 5 characters!"],
    },
    author: {
        type: String,
        required: [true, "Author is required!"],
        minlength: [2, "Author name must be at least 2 characters!"]
    },
    rating: {
        type: Number,
        min: [1, "Rating cant be less than 1"],
        max: [10, "Rating cannot be more than 10"]
    }
},{timestamps: true})



const Quote = mongoose.model("Quote", QuoteSchema);

module.exports = Quote;