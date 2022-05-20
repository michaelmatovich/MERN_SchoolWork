import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { Link } from "react-router-dom";


const OneProduct = () => {

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

    return (        <>
            <div className = "box2">
                <h2>Title: { oneProduct.title }</h2>
                <h3>Price: { oneProduct.price }</h3>
                <h3>Description: { oneProduct.description }</h3>
                <Link className = "linkage" to={"/"}>Home</Link>                
            </div>

        </>
    );
};

export default OneProduct;