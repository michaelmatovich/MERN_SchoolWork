import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const NewAuthorForm = () => {

const history = useHistory();

let [name, setName] = useState("")

let [errors, setErrors] = useState({})

const addAuthor = (e)=>{
    e.preventDefault();

    //create Author object
    let formInfo = {name}

    axios.post("http://localhost:8000/api/authors", formInfo)
        .then(res=>{
            console.log("Response is: ", res);

            if(res.data.error){
                console.log("Here are the errors: ")
                
                //save validations messages
                setErrors(res.data.error.errors);
                console.log(errors.name.message);                
            }
            else{
                setName("")
                history.push('/');
            }
        })
        .catch(err=>{
            console.log(err);            
        })
}




    return (        
        <>  
            <Link to = "/">Home</Link>
            <form className = "box" onSubmit = {addAuthor}>
                <div>
                    <p>Name:</p>
                    <input onChange={(e)=>setName(e.target.value)} type = "text" value = { name }></input>
                    <p className = "error">{errors.name? errors.name.message: null}</p>
                </div>
                <br></br>
                <input id = "submitbtn" type = "submit" value = "Add Author"></input>
                <Link to = "/" id = "cancel">Cancel</Link>
            </form>
        </>
    );
};

export default NewAuthorForm;