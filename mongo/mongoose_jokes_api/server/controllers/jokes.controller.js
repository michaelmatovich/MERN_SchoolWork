const Joke = require("../models/jokes.model"); //connect to db



module.exports.helloWorld = (req,res)=>{
    res.json({msg: "Hello to the world"});
}

module.exports.findAllJokes = (req,res)=>{
    Joke.find()
        .then(allJokes=>{
            res.json({results: allJokes})
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error: err})
        })
}

module.exports.createJoke = (req,res)=>{    
    Joke.create(req.body)
        .then(newJoke=>{
            res.json({results: newJoke})
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error: err})
        })
}

module.exports.findOneJoke = (req,res)=>{
    Joke.findOne({_id: req.params.id})
        .then(foundJoke =>{
            res.json({results: foundJoke})
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error: err})
        })
}

module.exports.updateJoke = (req,res)=>{
    Joke.findOneAndUpdate(
        {_id: req.params.id}, //specify which quote to update
        req.body, //specify the form information to update the quote with
        { new: true, runValidators: true }
    )
        .then(updatedJoke=>{
            res.json({results: updatedJoke})
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error: err})
        })
}

module.exports.deleteJoke = (req,res)=>{
    Joke.deleteOne({_id: req.params.id})
        .then(deletedJoke=>{
            res.json({results: deletedJoke})
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error: err})
        })
}





