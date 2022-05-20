import React, { useEffect, useState } from 'react';
import axios from 'axios';



const AllProducts = () => {

    let [allProducts, setAllProducts] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then(res=>{
            // console.log("Response is: ", res);
            setAllProducts(res.data.results);
        })
        .catch(err=>{
            console.log("Error is: ", err);
        })
    },[])

    return (        <>
            <div>
                <h2>All the Products</h2>
                {
                    allProducts.map((productObj, idx)=>{
                        return (
                                <div key = {productObj._id} className = "box">
                                    { productObj.title }<br></br>
                                    { productObj.price }<br></br>
                                    { productObj.description }<br></br><br></br>
                                </div>
                        )                        
                    })
                }
                
            </div>
        
        </>
    );
};

export default AllProducts;