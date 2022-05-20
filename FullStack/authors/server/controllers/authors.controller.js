const Author = require("../models/authors.model"); //connect to db

module.exports.helloWorld = (req,res)=>{
    res.json({msg: "Hello to the world"});
}

module.exports.findAllAuthors = (req,res)=>{
    Author.find()
        .then(allAuthors=>{
            res.json({results: allAuthors})
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error: err})
        })
}

module.exports.createAuthor = (req,res)=>{    
    Author.create(req.body)
        .then(newAuthor=>{
            res.json({results: newAuthor})
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error: err})
        })
}

module.exports.findOneAuthor = (req,res)=>{
    Author.findOne({_id: req.params.id})
        .then(foundAuthor =>{
            res.json({results: foundAuthor})
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error: err})
        })
}

module.exports.updateAuthor = (req,res)=>{
    Author.findOneAndUpdate(
        {_id: req.params.id}, //specify which quote to update
        req.body, //specify the form information to update the quote with
        { new: true, runValidators: true }
    )
        .then(updatedAuthor=>{
            res.json({results: updatedAuthor})
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error: err})
        })
}

module.exports.deleteAuthor = (req,res)=>{
    Author.deleteOne({_id: req.params.id})
        .then(deletedAuthor=>{
            res.json({results: deletedAuthor})
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error: err})
        })
}