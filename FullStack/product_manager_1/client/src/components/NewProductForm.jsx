import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewProductForm = () => {

let [title, setTitle] = useState("")
let [price, setPrice] = useState("")
let [description, setDescription] = useState("")

let [errors, setErrors] = useState({})

const addProduct = (e)=>{
    e.preventDefault();

    //create product object
    let formInfo = {title, price, description}

    axios.post("http://localhost:8000/api/products", formInfo)
        .then(res=>{
            console.log("Response is: ", res);

            if(res.data.error){
                console.log("Here are the errors: ")
                
                //save validations messages
                setErrors(res.data.error.errors);
                console.log(errors.title.message);                
            }
            else{
                setTitle("")
                setPrice("")
                setDescription("")
            }
        })
        .catch(err=>{
            console.log(err);            
        })
}


    return (        
            <form className = "box" onSubmit = {addProduct}>
                <div>
                    <p>Title:</p>
                    <input onChange={(e)=>setTitle(e.target.value)} type = "text" value = { title }></input>
                    <p className = "error">{errors.title? errors.title.message: null}</p>
                </div>
                <div>
                    <p>Price:</p>
                    <input value = { price}  step = "any" type = "number" onChange={(e)=>setPrice(e.target.value)}></input>
                    <p className = "error">{ errors.price? errors.price.message: null }</p>
                </div>
                <div>
                    <p>Description:</p>
                    <input value = { description }type = "text" onChange={(e)=>setDescription(e.target.value)}></input>
                </div>
                <br></br>
                <input id = "submitbtn" type = "submit" value = "Add Product"></input>
                
            </form>
    );
};

export default NewProductForm;