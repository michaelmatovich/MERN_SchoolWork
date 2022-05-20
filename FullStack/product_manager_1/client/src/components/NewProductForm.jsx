import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewProductForm = () => {

let [title, setTitle] = useState("");
let [price, setPrice] = useState("");
let [description, setDescription] = useState("");

const addProduct = (e)=>{
    e.preventDefault();

    //create product object
    let formInfo = {title, price, description}

    axios.post("http://localhost:8000/api/products", formInfo)
        .then(res=>{
            console.log("Response is: ", res);            
        })
        .catch(err=>{
            console.log("Error is: ", err);
        })
}


    return (        
            <form className = "box" onSubmit = {addProduct}>
                <div>
                    <p>Title:</p>
                    <input onChange={(e)=>setTitle(e.target.value)} type = "text"></input>
                </div>
                <div>
                    <p>Price:</p>
                    <input step = "any" type = "number" onChange={(e)=>setPrice(e.target.value)}></input>
                </div>
                <div>
                    <p>Description:</p>
                    <input type = "text" onChange={(e)=>setDescription(e.target.value)}></input>
                </div>
                <br></br>
                <input id = "submitbtn" type = "submit" value = "Add Product"></input>
            </form>
    );
};

export default NewProductForm;