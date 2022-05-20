import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";


const EditProduct = () => {


    const history = useHistory();

    const { id } = useParams();

    let [oneProduct, setOneProduct] = useState({});


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res=>{
            console.log("Response is: ", res);
            setOneProduct(res.data.results);         
        })
        .catch(err=>{
            console.log("Error is: ", err);
        })
    },[])

    const editProduct = (e)=>{
        e.preventDefault();
    
        //create product object       
    
        axios.put(`http://localhost:8000/api/products/${id}`, oneProduct)
            .then(res=>{
                console.log("Response is: ", res);
                history.push('/');
            })
            .catch(err=>{
                console.log(err);            
            })
    }

    const changeHandler = (e)=>{
        
        setOneProduct({
            ...oneProduct,
            [e.target.name]: e.target.value
        })
    }

    const deleteProduct = (e)=>{

        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(res=>{
                console.log("Response is: ", res);
                history.push('/');
            })
            .catch(err=>{
                console.log(err);            
            })
    }

        


    return (        <>
            <h1>Lets edit {id}</h1>
            <form className = "box" onSubmit = {editProduct}>
                <div>
                    <p>Title:</p>
                    <input type = "text" name = "title" value = { oneProduct.title } onChange = {changeHandler}></input>                    
                </div>
                <div>
                    <p>Price:</p>
                    <input value = { oneProduct.price } name = "price" step = "any" type = "number" onChange = {changeHandler}></input>                    
                </div>
                <div>
                    <p>Description:</p>
                    <input value = { oneProduct.description } name = "description" type = "text" onChange = {changeHandler}></input>
                </div>
                <br></br>
                <input id = "submitbtn" type = "submit" value = "Edit Product"></input>                
            </form>
            <button onClick = { deleteProduct }>Delete Me</button><br></br>
            <Link className = "linkage" to={"/"}>Home</Link> 
        </>
    );
};

export default EditProduct;