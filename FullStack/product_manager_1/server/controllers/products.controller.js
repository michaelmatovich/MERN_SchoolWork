const Product = require("../models/products.model"); //connect to db

module.exports.helloWorld = (req,res)=>{
    res.json({msg: "Hello to the world"});
}

module.exports.findAllProducts = (req,res)=>{
    Product.find()
        .then(allProducts=>{
            res.json({results: allProducts})
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error: err})
        })
}

module.exports.createProduct = (req,res)=>{    
    Product.create(req.body)
        .then(newProduct=>{
            res.json({results: newProduct})
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error: err})
        })
}

module.exports.findOneProduct = (req,res)=>{
    Product.findOne({_id: req.params.id})
        .then(foundProduct =>{
            res.json({results: foundProduct})
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error: err})
        })
}

module.exports.updateProduct = (req,res)=>{
    Product.findOneAndUpdate(
        {_id: req.params.id}, //specify which quote to update
        req.body, //specify the form information to update the quote with
        { new: true, runValidators: true }
    )
        .then(updatedProduct=>{
            res.json({results: updatedProduct})
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error: err})
        })
}

module.exports.deleteProduct = (req,res)=>{
    Product.deleteOne({_id: req.params.id})
        .then(deletedProduct=>{
            res.json({results: deletedProduct})
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error: err})
        })
}