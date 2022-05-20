const mongoose = require("mongoose");

//declare joke object
const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup is required!"],
        minlength: [10, "Setup must be at least 10 characters."]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required!"],
        minlength: [3, "Punchline must be at least 3 characters."]
    }
},{timestamps: true})

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;


//------------------------------------------------------------
// purpose of this file is to describe how our quotes table (collection) should look like
// const mongoose = require("mongoose");
// //instructions for what the quotes table should look like below
// const JokeSchema = new mongoose.Schema({
//     setup: {
//             type: String,
//             required: [true, "Setup is required!"],
//             minlength: [10, "Setup must be at least 10 characters."]
//         },
//     punchline: {
//         type: String,
//         required: [true, "Punchline is required!"],
//         minlength: [3, "Punchline name must be at least 2 characters!"]
//     }
// },{timestamps: true})



// const Joke = mongoose.model("Joke", JokeSchema);

// module.exports = Joke;